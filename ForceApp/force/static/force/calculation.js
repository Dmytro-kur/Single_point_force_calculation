function fill_value(id, item, var1, var2, var3) {

// new -------------------------------------------------------------------------------->
    if (item !== "variables") {
        document.querySelector(`#new_${item}_btn`).addEventListener('click', () => {

            if (document.querySelector(`#new_${item}`).style.display === 'none') {
    
                document.querySelector(`#id_${item}_key`).value = '';
                document.querySelector(`#id_${var1}`).value = '';
                document.querySelector(`#id_${var2}`).value = '';
                document.querySelector(`#id_${var3}`).value = '';
                document.querySelector(`#new_${item}`).style.display = 'block';
                document.querySelector(`#save_${item}_btn`).style.display = 'block';
            } else {
                document.querySelector(`#id_${item}_key`).value = '';
                document.querySelector(`#id_${var1}`).value = '';
                document.querySelector(`#id_${var2}`).value = '';
                document.querySelector(`#id_${var3}`).value = '';
                document.querySelector(`#new_${item}`).style.display = 'none';
                document.querySelector(`#save_${item}_btn`).style.display = 'none';
            }
        })
    }

// select changes -------------------------------------------------------------------------------->
    if (document.querySelector(id)) {
        document.querySelector(id).addEventListener('change', (event) => {

            const val = event.target.value
            const path = window.location.pathname.slice(13)

            if (val !== '0') {
                if (item !== "variables") {
                    document.querySelector(`#edit_${item}_btn`).style.display = 'block';
                }
                document.querySelector(`#delete_${item}_btn`).style.display = 'block';
            } else if (val === '0') {
                if (item !== "variables") {
                    document.querySelector(`#edit_${item}_btn`).style.display = 'none';
                }
                document.querySelector(`#delete_${item}_btn`).style.display = 'none';
            }

            fetch(`/parameter/${item}/${path}?num=${val}`)
            .then(response => response.json())
            .then(result => {
                document.querySelector(`input#${var1}`).value = result.var1;
                document.querySelector(`input#${var2}`).value = result.var2;
                document.querySelector(`input#${var3}`).value = result.var3;
            })
            .catch(err => {
                console.log(err)
            })
        })
    }

// save -------------------------------------------------------------------------------->
    if (item !== "variables") {
        document.querySelector(`#save_${item}_btn`).addEventListener('click', () => {

            let key = document.querySelector(`#id_${item}_key`).value;
            let v1 = document.querySelector(`#id_${var1}`).value;
            let v2 = document.querySelector(`#id_${var2}`).value;
            let v3 = document.querySelector(`#id_${var3}`).value;
    
            const path = window.location.pathname.slice(13)
    
            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
            const request = new Request(
                `/parameter/${item}/${path}?num=none`,
                {headers: {'X-CSRFToken': csrftoken}}
            );
    
            fetch(request, {
                method: 'POST',
                mode: 'same-origin',
                body: JSON.stringify({
                    key: key,
                    var1: v1,
                    var2: v2,
                    var3: v3,
                })
            })
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    console.log(result.error)
                } else {
                    console.log(result.message)
                    const newOption = document.createElement('option');
                    newOption.value = result.id;
                    newOption.innerHTML = result.key;
                    document.querySelector(id).append(newOption)
                }
            })
    
            document.querySelector(`#id_${item}_key`).value = '';
            document.querySelector(`#id_${var1}`).value = '';
            document.querySelector(`#id_${var2}`).value = '';
            document.querySelector(`#id_${var3}`).value = '';
        })
    
    }

// edit -------------------------------------------------------------------------------->
    if (item !== "variables") {
            if (document.querySelector(`#edit_${item}_btn`)) {
        document.querySelector(`#edit_${item}_btn`).addEventListener('click', () => {

            if (document.querySelector(id).value !== "0") {
    
                let v1 = document.querySelector(`input#${var1}`).value;
                let v2 = document.querySelector(`input#${var2}`).value;
                let v3 = document.querySelector(`input#${var3}`).value;
        
                const project_num = window.location.pathname.slice(13)
                const option_num = document.querySelector(id).value;
    
                const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                const request = new Request(
                    `/parameter/${item}/${project_num}?num=${option_num}`,
                    {headers: {'X-CSRFToken': csrftoken}}
                );
        
                fetch(request, {
                    method: 'PUT',
                    mode: 'same-origin',
                    body: JSON.stringify({
                        var1: v1,
                        var2: v2,
                        var3: v3,
                    })
                })
                .then(response => response.json())
                .then(result => {
                    if (result.error) {
        
                        console.log(result.error)
                    } else {
        
                        console.log(result.message)
                    }
                })
            }
        })
    }
    
    }

// delete -------------------------------------------------------------------------------->
    if (document.querySelector(`#delete_${item}_btn`)) {
        document.querySelector(`#delete_${item}_btn`).addEventListener('click', () => {

            if (document.querySelector(id).value !== "0") {
        
                const project_num = window.location.pathname.slice(13)
                const option_num = document.querySelector(id).value;
    
                const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                const request = new Request(
                    `/parameter/${item}/${project_num}?num=${option_num}`,
                    {headers: {'X-CSRFToken': csrftoken}}
                );
                fetch(request, {
                    method: 'DELETE',
                    mode: 'same-origin',
                })
                .then(response => response.json())
                .then(result => {
                    if (result.error) {
                        console.log(result.error)
                    } else {
                        const x = document.querySelector(id)
                        x.remove(x.selectedIndex)
                        console.log(result.message)
                        document.querySelector(`input#${var1}`).value = '';
                        document.querySelector(`input#${var2}`).value = '';
                        document.querySelector(`input#${var3}`).value = '';
                        if (item !== "variables") {
                            document.querySelector(`#edit_${item}_btn`).style.display = 'none';
                        }
                        document.querySelector(`#delete_${item}_btn`).style.display = 'none';
                    }
                })
            }
        })
    }
}











function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function visualization() {

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');

    let canvas_scale = 0.6;

    canvas.width = window.innerWidth * canvas_scale;
    canvas.height = window.innerHeight * canvas_scale;

    let mouseState = 'mouseup';
    let coord = {
        X: 0,
        Y: 0,
    }
    let mouse = {
        X: 0,
        Y: 0,
    }
    let scale = 0.8;
    let pos = {
        X: 0,
        Y: 0,
    }

    document.querySelector('#home_btn').addEventListener('click', () => {
        coord.X = 0,
        coord.Y = 0,
        mouse.X = 0,
        mouse.Y = 0,
        scale = 0.8;
        pos.X = 0;
        pos.Y = 0;
        drawRect(ctx, scale, pos.X, pos.Y);
    })

    canvas.addEventListener('mouseover', () => {
        disableScroll();
        canvas.addEventListener('mousemove', function(event) {
            var rect = canvas.getBoundingClientRect();
            mouse.X = event.clientX - rect.left;
            mouse.Y = event.clientY - rect.top;
            document.querySelector('#posX').innerHTML = `X: <small>${mouse.X.toFixed(3)}</small>`
            document.querySelector('#posY').innerHTML = ` Y: <small>${mouse.Y.toFixed(3)}</small>`
            if (mouseState === 'mousedown') {
                pos.X = mouse.X - coord.X;
                pos.Y = mouse.Y - coord.Y;
                drawRect(ctx, scale, pos.X, pos.Y);
            }
        })

    })   
    canvas.addEventListener('mouseout', function(event) {
        enableScroll();
    })


// canvas scrolling ---------------------------------------------->
    canvas.addEventListener('wheel', function(event) {
        
        scale += 0.05 * Math.sign(event.deltaY)
        if (scale < 0.1) {
            scale = 0.1;
        }
        drawRect(ctx, scale, pos.X, pos.Y);
    })
// window resizing ---------------------------------------------->
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth * canvas_scale;
        canvas.height = window.innerHeight * canvas_scale;
        drawRect(ctx, scale, pos.X, pos.Y);
    })
    drawRect(ctx, scale, pos.X, pos.Y);
// rectangle fit ---------------------------------------------->
    canvas.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
            console.log(mouse.X, mouse.Y)
            canvas.addEventListener('mouseup', (event) => {
                if (event.button === 0) {
                    console.log(mouse.X, mouse.Y)
                }
            })
        }
    })
// translate context
    canvas.addEventListener('mousedown', (event)=> {
        if (event.button === 1) {
            mouseState = 'mousedown'
            coord.X = mouse.X - pos.X;
            coord.Y = mouse.Y - pos.Y;
            document.body.addEventListener('mouseup', (event) => {
                if (event.button === 1) {
                    mouseState = 'mouseup'
                    coord.X = mouse.X - pos.X;
                    coord.Y = mouse.Y - pos.Y;
                }
            })
        }
    })
}

function drawRect(ctx, scale, posX, posY) {
    ctx.clearRect(0, 0, canvas.clientWidth + 100, canvas.height);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'green';
    const rect = {
        startX: canvas.width/2 * (1 - scale) + posX,
        startY: canvas.height/2 * (1 - scale) + posY,
        width: canvas.width * scale,
        height: canvas.height * scale,
    }
    ctx.strokeRect(rect.startX, rect.startY, rect.width, rect.height)

    const parse_b = parseFloat(document.querySelector('input#b').value)
    const parse_a = parseFloat(document.querySelector('input#a').value)
    const parse_contactCoord_X = parseFloat(document.querySelector('input#contactCoord_X').value)
    const parse_contactCoord_Y = parseFloat(document.querySelector('input#contactCoord_Y').value)

    const max_width = Math.abs(parse_contactCoord_X - (parse_b + parse_a)); 
    const max_height = Math.abs(parse_contactCoord_Y);

    const parse_scale_X = rect.width/max_width;
    const parse_scale_Y = rect.height/max_height;

    const check_X = {
        check_X_width: max_width * parse_scale_X,
        check_X_height: max_height * parse_scale_X,
    }

    const check_Y = {
        check_Y_width: max_width * parse_scale_Y,
        check_Y_height: max_height * parse_scale_Y,
    }

    let parse_scale = 1;

    if (check_X.check_X_width <= rect.width + 5 && 
        check_X.check_X_height <= rect.height + 5) {
        parse_scale = parse_scale_X;
    } else if (check_Y.check_Y_width <= rect.width + 5 && 
        check_Y.check_Y_height <= rect.height + 5) {
        parse_scale = parse_scale_Y;
    } else if (check_Y.check_Y_width === rect.width || 
        check_Y.check_Y_height === rect.height) {
        parse_scale = parse_scale_X;

    }

    const AyBy = rect.startY + rect.height/2 + max_height*parse_scale/2;

    const AtoB = {
        Ax: rect.startX,
        Ay: AyBy,
        Bx: rect.startX + parse_b * parse_scale,
        By: AyBy,
    }

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(AtoB.Ax, AtoB.Ay);
    ctx.lineTo(AtoB.Bx, AtoB.By);
    ctx.closePath();
    ctx.stroke();

    const BtoC = {
        Bx: AtoB.Bx,
        By: AtoB.By,
        Cx: AtoB.Bx + parse_a * parse_scale,
        Cy: AtoB.By,
    }
    
    ctx.strokeStyle = 'coral';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(BtoC.Bx, BtoC.By);
    ctx.lineTo(BtoC.Cx, BtoC.Cy);
    ctx.closePath();
    ctx.stroke();

    const CtoO = {
        Ox: BtoC.Cx - parse_contactCoord_X * parse_scale,
        Oy: BtoC.Cy - parse_contactCoord_Y * parse_scale,
    }
    
    ctx.beginPath();
    ctx.arc(CtoO.Ox, CtoO.Oy, 5, 0, Math.PI*2);
    ctx.fillStyle = 'purple';
    ctx.fill();

}

document.addEventListener('DOMContentLoaded', function() {

    fill_value("#contacts", "contact", "mu", "contactCoord_X", "contactCoord_Y");
    fill_value("#plungers", "plunger", "a", "b", "f");
    fill_value("#springs", "spring", "springStiff", "freeLen", "springLen");
    fill_value("#angles", "angles", "plungerFric", "N", "FN");
    fill_value("#variables", "variables", "Na", "Nb", "NR");

    visualization();
})
// https://www.youtube.com/watch?v=vxljFhP2krI&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=4