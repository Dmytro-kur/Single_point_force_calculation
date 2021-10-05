from django.test import TestCase
from .models import *


class VariablesTestCase(TestCase):

    def setUp(self):

        # create User
        testUser = User.objects.create_user(username="TestUser", 
            email='test@example.com',
            password='0000')

        # create Project
        testProject = Project.objects.create(project_number="P01222",
            project_name="Test Project",
            assembly_number="10100333",
            user=testUser)

        # create Contact
        Contact.objects.create(contact_key="Test Contact 1",
            mu=0.15,
            contactCoord_X=0,
            contactCoord_Y=0,
            project=testProject)

        # create Plunger
        Plunger.objects.create(plunger_key="Test Plunger 1",
            a=0.197,
            b=3.56,
            f=0.15,
            project=testProject)

        # create Spring
        Spring.objects.create(spring_key="Test Spring 1",
            springStiff=4.1,
            freeLen=10.7,
            springLen=8.232,
            project=testProject)

        # create Angles
        Angles.objects.create(angles_key="Test Angles 1",
            plungerFric=0,
            N=215.01,
            FN=305.01,
            project=testProject)
            
    def test_math_model(self):
        """Put all variables and solve equations
            [ Na*f       Nb*f     N*(mu*cos(alpha) + cos(beta))]
            [-Na         Nb       N*(mu*sin(alpha) + sin(beta))]  =  [-F    0     0]
            [ Na*(a+b)  -Nb*a     N*0                          ]"""

        cont = Contact.objects.get(contact_key="Test Contact 1")
        plng = Plunger.objects.get(plunger_key="Test Plunger 1")
        sprg = Spring.objects.get(spring_key="Test Spring 1")
        angl = Angles.objects.get(angles_key="Test Angles 1")

        Na, Nb, NR = calc_forces(
            angl.plungerFric,
            sprg.load(), 
            plng.a, 
            plng.b, 
            plng.f, 
            cont.mu, 
            angl.N, 
            angl.FN
            )
        # vars = Variables.objects.get(variables_key="Test Variables 1")

        self.assertEqual(round(Na*plng.f*cos(angl.plungerFric) + \
                Nb*plng.f*cos(angl.plungerFric) + \
                NR*(cont.mu*cos(angl.FN) + cos(angl.N)), 5), \
                round(-sprg.load(), 5))

        self.assertEqual(round(-Na + Nb + \
            NR*(cont.mu*sin(angl.FN) + sin(angl.N)), 5), 0)

        self.assertEqual(round(Na*(plng.a + plng.b) - Nb*plng.a, 5), 0)
