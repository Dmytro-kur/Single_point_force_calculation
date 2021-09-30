class CalcInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact_key: "",
            mu: 0.15,
            contactCoord_X: 1,
            contactCoord_Y: 1,

            plunger_key: "",
            a: 1,
            b: 1,
            f: 0.15,

            spring_key: "",
            springStiff: 4.1,
            freeLen: 10.7,
            springLen: 8.9,

            angles_key: "",
            plungerFric: "0",
            N: 120,
            FN: '+',

            // variables_key: "",

            contact_state: 0,
            plunger_state: 0,
            spring_state: 0,
            angles_state: 0,
            // variables_state: 0,
        };
    }
    render() {
        const label_style = {
            fontSize: "12px",
        };
        const group_name_style = {
            backgroundImage: "linear-gradient(to bottom right, rgb(211 237 255 / 100%), rgb(211 237 255 / 5%))",
            textAlign: "center",
            border: "1px solid grey",
            borderRadius: "5px",
            fontSize: "18px",
            fontStyle: "bold",
        };
        return (
            
            <div className="root">

                <form id="contact_form" className="row g-1 needs-validation" noValidate onSubmit={this.preventSubmit}>
                    
                    <div style={group_name_style} className="col-sm-12 position-relative">Contact</div>
                    
                    <div className="col-sm-12 position-relative">
                        <input type="text" id="contact_key" className="form-control form-control-sm" placeholder="Contact group name:" onChange={this.update_contact_key} value={this.state.contact_key}/>
                        <div id="contact_key_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-12 position-relative">
                        <select id="contact" className="form-select form-select-sm" onChange={this.chooseContactOption}>
                            <option value="None" defaultValue>Create new</option>
                        </select>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="mu" className="form-label">Friction:</label>
                        <input id="mu" className="form-control form-control-sm" type="number" step="0.01" min="0" onChange={this.update_mu} value={this.state.mu}/>
                        <div id="mu_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>
                    
                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="contactCoord_X" className="form-label">X coordinate:</label>
                        <input id="contactCoord_X" className="form-control form-control-sm" type="number" step="0.1" onChange={this.update_contactCoord_X} value={this.state.contactCoord_X}/>
                        <div id="contactCoord_X_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>
                    
                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="contactCoord_Y" className="form-label">Y coordinate:</label>
                        <input id="contactCoord_Y" className="form-control form-control-sm" type="number" step="0.1" onChange={this.update_contactCoord_Y} value={this.state.contactCoord_Y}/>
                        <div id="contactCoord_Y_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="save_contact_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickContactSave}>Save</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="delete_contact_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickContactDelete}>Delete</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="edit_contact_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickContactEdit}>Edit</button>
                    </div>
                </form>



                <form id="plunger_form" className="row g-1 needs-validation" noValidate onSubmit={this.preventSubmit}>
                    
                    <div style={group_name_style} className="col-sm-12 position-relative">Plunger</div>
                    
                    <div className="col-sm-12 position-relative">
                        <input type="text" id="plunger_key" className="form-control form-control-sm" placeholder="Plunger group name:" onChange={this.update_plunger_key} value={this.state.plunger_key}/>
                        <div id="plunger_key_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-12 position-relative">
                        <select id="plunger" className="form-select form-select-sm" onChange={this.choosePlungerOption}>
                            <option value="None" defaultValue>Create new</option>
                        </select>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="f" className="form-label">Friction:</label>
                        <input id="f" className="form-control form-control-sm" type="number" step="0.01" min="0" onChange={this.update_f} value={this.state.f}/>
                        <div id="f_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="a" className="form-label">Distance A:</label>
                        <input id="a" className="form-control form-control-sm" type="number" step="0.1" min="0" onChange={this.update_a} value={this.state.a}/>
                        <div id="a_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="a" className="form-label">Distance B:</label>
                        <input id="b" className="form-control form-control-sm" type="number" step="0.1" min="0" onChange={this.update_b} value={this.state.b}/>
                        <div id="b_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="save_plunger_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickPlungerSave}>Save</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="delete_plunger_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickPlungerDelete}>Delete</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="edit_plunger_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickPlungerEdit}>Edit</button>
                    </div>
                </form>



                <form id="spring_form" className="row g-1 needs-validation" noValidate onSubmit={this.preventSubmit}>
                    <div style={group_name_style} className="col-sm-12 position-relative">Spring</div>
                    
                    <div className="col-sm-12 position-relative">
                        <input type="text" id="spring_key" className="form-control form-control-sm" placeholder="Spring group name:" onChange={this.update_spring_key} value={this.state.spring_key}/>
                        <div id="spring_key_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-12 position-relative">
                        <select id="spring" className="form-select form-select-sm" onChange={this.chooseSpringOption}>
                            <option value="None" defaultValue>Create new</option>
                        </select>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="springStiff" className="form-label">Stiffness:</label>
                        <input id="springStiff" className="form-control form-control-sm" type="number" step="0.1" min="0" onChange={this.update_springStiff} value={this.state.springStiff}/>
                        <div id="springStiff_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>
                    
                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="freeLen" className="form-label">Free length:</label>
                        <input id="freeLen" className="form-control form-control-sm" type="number" step="0.1" min="0" onChange={this.update_freeLen} value={this.state.freeLen}/>
                        <div id="freeLen_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>
                    
                    <div className="col-sm-4 position-relative">
                        <label style={label_style} htmlFor="springLen" className="form-label">Length:</label>
                        <input id="springLen" className="form-control form-control-sm" type="number" step="0.1" min="0" onChange={this.update_springLen} value={this.state.springLen}/>
                        <div id="springLen_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="save_spring_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickSpringSave}>Save</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="delete_spring_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickSpringDelete}>Delete</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="edit_spring_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickSpringEdit}>Edit</button>
                    </div>
                
                </form>



                <form id="angles_form" className="row g-1 needs-validation" noValidate onSubmit={this.preventSubmit}>

                    <div style={group_name_style} className="col-sm-12 position-relative">Angles</div>
                    
                    <div className="col-sm-12 position-relative">
                        <input type="text" id="angles_key" className="form-control form-control-sm" placeholder="Angles group name:" onChange={this.update_angles_key} value={this.state.angles_key}/>
                        <div id="angles_key_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-12 position-relative">
                        <select id="angles" className="form-select form-select-sm" onChange={this.chooseAnglesOption}>
                            <option value="None" defaultValue>Create new</option>
                        </select>
                    </div>



                    <div style={label_style} className="col-sm-12 position-relative">
                        Direction of plunger friction forces:
                    </div>

                    <div className="col-sm-12 position-relative">
                        <input id="plungerFric0" type="radio" name="plungerFric" className="form-check-input"
                            value="0" checked={this.state.plungerFric === "0"} onChange={this.update_plungerFric}/>
                        <label style={label_style} className="form-check-label" htmlFor="plungerFric0">0 deg</label>
                        
                        <input id="plungerFric180" type="radio" name="plungerFric" className="form-check-input"
                            value="180" checked={this.state.plungerFric === "180"} onChange={this.update_plungerFric}/>
                        <label style={label_style} className="form-check-label" htmlFor="plungerFric180">180 deg</label>
                        
                        <div id="plungerFric_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>



                    <div className="col-sm-12 position-relative">
                        <label style={label_style} htmlFor="N" className="form-label">Direction of normal reaction force:</label>
                        <input id="N" className="form-control form-control-sm" type="number" step="1" min="90" max="270" onChange={this.update_N} value={this.state.N}/>
                        <div id="N_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>
                    


                    <div style={label_style} className="col-sm-12 position-relative">
                        Direction of normal reaction friction force: 
                    </div>

                    <div className="col-sm-12 position-relative">
                        <input id="FNplus" type="radio" name="FN" className="form-check-input"
                            value="+" checked={this.state.FN === "+"} onChange={this.update_FN}/>
                        <label style={label_style} className="form-check-label" htmlFor="FNplus"> + 90 deg</label>

                        <input id="FNminus" type="radio" name="FN" className="form-check-input"
                            value="-" checked={this.state.FN === "-"} onChange={this.update_FN}/>
                        <label style={label_style} className="form-check-label" htmlFor="FNminus"> - 90 deg</label>
                        
                        <div id="FN_invalid-tooltip" className="invalid-tooltip">
                        </div>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="save_angles_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickAnglesSave}>Save</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="delete_angles_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickAnglesDelete}>Delete</button>
                    </div>

                    <div className="col-sm-4 position-relative">
                        <button id="edit_angles_btn" className="col-sm-12 btn btn-outline-primary btn-sm" onClick={this.clickAnglesEdit}>Edit</button>
                    </div>

                </form>

                {/* <form id="variables_form" className="row g-1 needs-validation" noValidate onSubmit={this.preventSubmit}>

                    <div style={group_name_style} className="col-sm-12 position-relative">Forces</div>

                    <input type="text" required id="variables_key"/>

                    <select id="variables" onChange={this.chooseVariablesOption}>
                        <option value="None" defaultValue>Create</option>
                    </select>

                    <button id="delete_variables_btn" className="btn btn-outline-primary btn-sm" onClick={this.clickVariablesSave}>Delete</button>
                    <button id="save_variables_btn" className="btn btn-outline-primary btn-sm" onClick={this.clickVariablesDelete}>Save</button>
                    <button id="edit_variables_btn" className="btn btn-outline-primary btn-sm" onClick={this.clickVariablesEdit}>Edit</button>
                
                </form> */}

            </div>
        );
    }

    hideAlldelete() {
        document.querySelector('#delete_contact_btn').disabled = true;
        document.querySelector('#delete_plunger_btn').disabled = true;
        document.querySelector('#delete_spring_btn').disabled = true;
        document.querySelector('#delete_angles_btn').disabled = true;
        // document.querySelector('#delete_variables_btn').disabled = true;
    }
    showAlldelete() {
        document.querySelector('#delete_contact_btn').disabled = false;
        document.querySelector('#delete_plunger_btn').disabled = false;
        document.querySelector('#delete_spring_btn').disabled = false;
        document.querySelector('#delete_angles_btn').disabled = false;
        // document.querySelector('#delete_variables_btn').disabled = false;
    }
//
    hideAllsave() {
        document.querySelector('#save_contact_btn').disabled = true;
        document.querySelector('#save_plunger_btn').disabled = true;
        document.querySelector('#save_spring_btn').disabled = true;
        document.querySelector('#save_angles_btn').disabled = true;
        // document.querySelector('#save_variables_btn').disabled = true;
    }
    showAllsave() {
        document.querySelector('#save_contact_btn').disabled = false;
        document.querySelector('#save_plunger_btn').disabled = false;
        document.querySelector('#save_spring_btn').disabled = false;
        document.querySelector('#save_angles_btn').disabled = false;
        // document.querySelector('#save_variables_btn').disabled = false;
    }
//
    hideAlledit() {
        document.querySelector('#edit_contact_btn').disabled = true;
        document.querySelector('#edit_plunger_btn').disabled = true;
        document.querySelector('#edit_spring_btn').disabled = true;
        document.querySelector('#edit_angles_btn').disabled = true;
        // document.querySelector('#edit_variables_btn').disabled = true;
    }
    showAlledit() {
        document.querySelector('#edit_contact_btn').disabled = false;
        document.querySelector('#edit_plunger_btn').disabled = false;
        document.querySelector('#edit_spring_btn').disabled = false;
        document.querySelector('#edit_angles_btn').disabled = false;
        // document.querySelector('#edit_variables_btn').disabled = false;
    }
//
    hideAllkey() {
        document.querySelector('#contact_key').disabled = true;
        document.querySelector('#plunger_key').disabled = true;
        document.querySelector('#spring_key').disabled = true;
        document.querySelector('#angles_key').disabled = true;
        // document.querySelector('#variables_key').disabled = true;
    }
    showAllkey() {
        document.querySelector('#contact_key').disabled = false;
        document.querySelector('#plunger_key').disabled = false;
        document.querySelector('#spring_key').disabled = false;
        document.querySelector('#angles_key').disabled = false;
        // document.querySelector('#variables_key').disabled = false;
    }
//
    newState(name) {
        document.querySelector(`#delete_${name}_btn`).disabled = true;
        document.querySelector(`#save_${name}_btn`).disabled = false;
        document.querySelector(`#${name}_key`).disabled = false;
        document.querySelector(`#edit_${name}_btn`).disabled = true;
    }
    activeState(name) {
        document.querySelector(`#delete_${name}_btn`).disabled = false;
        document.querySelector(`#save_${name}_btn`).disabled = true;
        document.querySelector(`#${name}_key`).disabled = true;
        document.querySelector(`#edit_${name}_btn`).disabled = true;
    }
    editState(name) {
        document.querySelector(`#delete_${name}_btn`).disabled = false;
        document.querySelector(`#save_${name}_btn`).disabled = true;
        document.querySelector(`#${name}_key`).disabled = true;
        document.querySelector(`#edit_${name}_btn`).disabled = false;
    }

    componentDidMount() {

        this.hideAlldelete();
        this.hideAlledit();

        unread_emails();
        let cnt_select = document.querySelector('#contact');
        let plng_select = document.querySelector('#plunger');
        let sprg_select = document.querySelector('#spring');
        let angl_select = document.querySelector('#angles');
        // let vrbl_select = document.querySelector('#variables');

        let cnt_options = document.querySelectorAll('.contact_options');
        let plng_options = document.querySelectorAll('.plunger_options');
        let sprg_options = document.querySelectorAll('.spring_options');
        let angl_options = document.querySelectorAll('.angles_options');
        // let vrbl_options = document.querySelectorAll('.variables_options');

        cnt_options.forEach(option => {
            cnt_select.appendChild(option);
        })

        plng_options.forEach(option => {
            plng_select.appendChild(option);
        })
        
        sprg_options.forEach(option => {
            sprg_select.appendChild(option);
        })

        angl_options.forEach(option => {
            angl_select.appendChild(option);
        })

        // vrbl_options.forEach(option => {
        //     vrbl_select.appendChild(option)
        // })
    }

    preventSubmit = (event) => {
        event.preventDefault()
    }

    clearContactValidation = (start, end) => {
        let FIELDS = [
            'contact_key', 'mu', 'contactCoord_X', 'contactCoord_Y',
        ]
        FIELDS.slice(start, end).forEach((field) => {
            document.querySelector(`#${field}`).classList.remove('is-invalid')
            document.querySelector(`#${field}`).classList.remove('is-valid')
            document.querySelector(`#${field}_invalid-tooltip`).innerHTML = ''
        })
    };
    clearPlungerValidation = (start, end) => {
        let FIELDS = [
            'plunger_key', 'a', 'b', 'f',
        ]
        FIELDS.slice(start, end).forEach((field) => {
            document.querySelector(`#${field}`).classList.remove('is-invalid')
            document.querySelector(`#${field}`).classList.remove('is-valid')
            document.querySelector(`#${field}_invalid-tooltip`).innerHTML = ''
        })
    };
    clearSpringValidation = (start, end) => {
        let FIELDS = [
            'spring_key', 'springStiff', 'freeLen', 'springLen',
        ]
        FIELDS.slice(start, end).forEach((field) => {
            document.querySelector(`#${field}`).classList.remove('is-invalid')
            document.querySelector(`#${field}`).classList.remove('is-valid')
            document.querySelector(`#${field}_invalid-tooltip`).innerHTML = ''
        })
    }
    clearAnglesValidation = (start, end) => {
        let FIELDS = [
            'angles_key', 'plungerFric', 'N', 'FN',
        ]
        FIELDS.slice(start, end).forEach((field) => {
            if (field === 'plungerFric') {
                document.querySelector(`#${field}0`).classList.remove('is-invalid')
                document.querySelector(`#${field}0`).classList.remove('is-valid')
                document.querySelector(`#${field}180`).classList.remove('is-invalid')
                document.querySelector(`#${field}180`).classList.remove('is-valid')

                document.querySelector(`#${field}_invalid-tooltip`).innerHTML = ''

            } else if (field === 'FN') {
                document.querySelector(`#${field}plus`).classList.remove('is-invalid')
                document.querySelector(`#${field}plus`).classList.remove('is-valid')
                document.querySelector(`#${field}minus`).classList.remove('is-invalid')
                document.querySelector(`#${field}minus`).classList.remove('is-valid')

                document.querySelector(`#${field}_invalid-tooltip`).innerHTML = ''
                
            } else {
                document.querySelector(`#${field}`).classList.remove('is-invalid')
                document.querySelector(`#${field}`).classList.remove('is-valid')
                document.querySelector(`#${field}_invalid-tooltip`).innerHTML = ''
            }
        })
    }
    // clearVariablesValidation = (start, end) => {
    //     let FIELDS = [
    //         'variables_key', 'Na', 'Nb', 'NR',
    //     ]
    //     FIELDS.slice(start, end).forEach((field) => {
    //         document.querySelector(`#${field}`).classList.remove('is-invalid')
    //         document.querySelector(`#${field}`).classList.remove('is-valid')
    //         document.querySelector(`#${field}_invalid-tooltip`).innerHTML = ''
    //     })
    // }

    chooseContactOption = (event) => {
        this.clearContactValidation(0, 4);
        parameter(event, "contact")
        .then(result => {

            if (result.var1 === 'unknown' &&
                result.var2 === 'unknown' &&
                result.var3 === 'unknown') {
                this.setState({
                    mu: 0.15,
                    contactCoord_X: 1,
                    contactCoord_Y: 1,
                    contact_state: 0,
                })
                drawRect(ctx, scale, pos.X, pos.Y, 1, 1,
                    this.state.a, this.state.b);
                this.newState('contact');

            } else {
                this.setState({
                    mu: result.var1,
                    contactCoord_X: result.var2,
                    contactCoord_Y: result.var3,
                    contact_state: 1,
                })
                drawRect(ctx, scale, pos.X, pos.Y, result.var2, result.var3,
                    this.state.a, this.state.b);
                this.activeState('contact');

            }
        })
    }

    choosePlungerOption = (event) => {
        this.clearPlungerValidation(0, 4);
        parameter(event, "plunger")
        .then(result => {

            if (result.var1 === 'unknown' &&
                result.var2 === 'unknown' &&
                result.var3 === 'unknown') {
                this.setState({
                    a: 1,
                    b: 1,
                    f: 0.15,
                    plunger_state: 0,
                })
                drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                    1, 1);
                this.newState('plunger');
            } else {
                this.setState({
                    a: result.var1,
                    b: result.var2,
                    f: result.var3,
                    plunger_state: 1,
                })
                drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                    result.var1, result.var2);
                this.activeState('plunger');
            }
        })
    }

    chooseSpringOption = (event) => {
        this.clearSpringValidation(0, 4);
        parameter(event, "spring")
        .then(result => {

            if (result.var1 === 'unknown' &&
                result.var2 === 'unknown' &&
                result.var3 === 'unknown') {
                this.setState({
                    springStiff: 4.1,
                    freeLen: 10.7,
                    springLen: 8.9,
                    spring_state: 0,
                })
                drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                    this.state.a, this.state.b);
                this.newState('spring');
            } else {
                this.setState({
                    springStiff: result.var1,
                    freeLen: result.var2,
                    springLen: result.var3,
                    spring_state: 1,
                })
                drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                    this.state.a, this.state.b);
                this.activeState('spring');
            }
        })
    }

    chooseAnglesOption = (event) => {
        this.clearAnglesValidation(0, 4);
        parameter(event, "angles")
        .then(result => {

            if (result.var1 === 'unknown' &&
                result.var2 === 'unknown' &&
                result.var3 === 'unknown') {
                this.setState({
                    plungerFric: '0',
                    N: 120,
                    FN: '+',
                    angles_state: 0,
                })
                drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                    this.state.a, this.state.b);
                this.newState('angles');

            } else {
                this.setState({
                    plungerFric: String(result.var1),
                    N: result.var2,
                    angles_state: 1,
                })
                if (result.var3 > result.var2) {
                    this.setState({
                        FN: '+',
                    })
                } else if (result.var3 < result.var2) {
                    this.setState({
                        FN: '-',
                    })
                }

                drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                    this.state.a, this.state.b);
                this.activeState('angles');
            }
        })
    }

    // chooseVariablesOption = (event) => {
    //     this.clearVariablesValidation(0, 4);
    // }

        /////////////////////////////////////
    update_contact_key =(event) => {
        this.clearContactValidation(0, 1);
        this.setState({
            contact_key: event.target.value,
        }) 
    }

    update_mu = (event) => {unread_emails();
        this.clearContactValidation(1, 2);
        this.setState({
            mu: event.target.value,
        }) 
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
            this.state.a, this.state.b);
        } else {
            // pass
        }
        

        if (this.state.contact_state === 0) {
            this.newState('contact');
        } else {
            this.editState('contact');
            this.setState({
                contact_state: 2,
            })   
        }
        
    }

    update_contactCoord_X = (event) => {unread_emails();
        this.clearContactValidation(2, 3);
        this.setState({
            contactCoord_X: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, event.target.value, this.state.contactCoord_Y,
                this.state.a, this.state.b);
        } else {
            // pass
        }

        if (this.state.contact_state === 0) {
            this.newState('contact');
        } else {
            this.editState('contact');
            this.setState({
                contact_state: 2,
            })  
        }
    }

    update_contactCoord_Y = (event) => {unread_emails();
        this.clearContactValidation(3, 4);
        this.setState({
            contactCoord_Y: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, event.target.value,
                this.state.a, this.state.b);
        } else {
            // pass
        }

        if (this.state.contact_state === 0) {
            this.newState('contact');
        } else {
            this.editState('contact');
            this.setState({
                contact_state: 2,
            })  
        }
    }
        /////////////////////////////////////
    update_plunger_key =(event) => {
        this.clearPlungerValidation(0, 1);
        this.setState({
            plunger_key: event.target.value,
        }) 
    }

    update_a = (event) => {unread_emails();
        this.clearPlungerValidation(1, 2);
        this.setState({
            a: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                event.target.value, this.state.b);    
        } else {
            // pass
        }

        if (this.state.plunger_state === 0) {
            this.newState('plunger');
        } else {
            this.editState('plunger');
            this.setState({
                plunger_state: 2,
            })  
        }
    }

    update_b = (event) => {unread_emails();
        this.clearPlungerValidation(2, 3);
        this.setState({
            b: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, event.target.value);
        } else {
            // pass
        }

        if (this.state.plunger_state === 0) {
            this.newState('plunger');
        } else {
            this.editState('plunger');
            this.setState({
                plunger_state: 2,
            })  
        }
    }

    update_f = (event) => {unread_emails();
        this.clearPlungerValidation(3, 4);
        this.setState({
            f: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, this.state.b);
        } else {
            // pass
        }

        if (this.state.plunger_state === 0) {
            this.newState('plunger');
        } else {
            this.editState('plunger');
            this.setState({
                plunger_state: 2,
            })  
        }
    }
        /////////////////////////////////////
    update_spring_key =(event) => {
        this.clearSpringValidation(0, 1);
        this.setState({
            spring_key: event.target.value,
        }) 
    }
    update_springStiff = (event) => {unread_emails();
        this.clearSpringValidation(1, 2);
        this.setState({
            springStiff: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, this.state.b);    
        } else {
            // pass
        }

        if (this.state.spring_state === 0) {
            this.newState('spring');
        } else {
            this.editState('spring');
            this.setState({
                spring_state: 2,
            })  
        }           
    }
    update_freeLen = (event) => {unread_emails();
        this.clearSpringValidation(2, 3);
        this.setState({
            freeLen: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, this.state.b);
        } else {
            // pass
        }

        if (this.state.spring_state === 0) {
            this.newState('spring');
        } else {
            this.editState('spring');
            this.setState({
                spring_state: 2,
            })  
        }            
    }
    update_springLen = (event) => {unread_emails();
        this.clearSpringValidation(3, 4);
        this.setState({
            springLen: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, this.state.b);    
        } else {
            // pass
        }

        if (this.state.spring_state === 0) {
            this.newState('spring');
        } else {
            this.editState('spring');
            this.setState({
                spring_state: 2,
            })  
        }
    }
        /////////////////////////////////////
    update_angles_key =(event) => {
        this.clearAnglesValidation(0, 1);
        this.setState({
            angles_key: event.target.value,
        }) 
    }
    update_plungerFric = (event) => {unread_emails();
        this.clearAnglesValidation(1, 2);
        this.setState({
            plungerFric: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, this.state.b);    
        } else {
            // pass
        }

        if (this.state.angles_state === 0) {
            this.newState('angles');
        } else {
            this.editState('angles');
            this.setState({
                angles_state: 2,
            })  
        }
    }
    update_N = (event) => {unread_emails();
        this.clearAnglesValidation(2, 3);
        this.setState({
            N: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, this.state.b);    
        } else {
            // pass
        }

        if (this.state.angles_state === 0) {
            this.newState('angles');
        } else {
            this.editState('angles');
            this.setState({
                angles_state: 2,
            })  
        }
    }
    update_FN = (event) => {unread_emails();
        this.clearAnglesValidation(3, 4);
        this.setState({
            FN: event.target.value,
        })
        if (event.target.value) {
            drawRect(ctx, scale, pos.X, pos.Y, this.state.contactCoord_X, this.state.contactCoord_Y,
                this.state.a, this.state.b);
        } else {
            // pass
        }

        if (this.state.angles_state === 0) {
            this.newState('angles');
        } else {
            this.editState('angles');
            this.setState({
                angles_state: 2,
            })  
        }
    }
        /////////////////////////////////////

    clickContactSave = () => {
        const select = document.querySelector('#contact');
        post_data(select, 'contact', 
            this.state.mu, this.state.contactCoord_X, this.state.contactCoord_Y)
    }

    clickPlungerSave = () => {
        const select = document.querySelector('#plunger');
        post_data(select, 'plunger', this.state.a, this.state.b, this.state.f)
    }

    clickSpringSave = () => {
        const select = document.querySelector('#spring');
        post_data(select, 'spring', this.state.springStiff, this.state.freeLen, this.state.springLen)
    }

    clickAnglesSave = () => {
        const select = document.querySelector('#angles');

        let var1 = null;
        if (this.state.plungerFric === "0") {
            var1 = 0;
        } else if (this.state.plungerFric === "180") {
            var1 = 180;
        }

        let var3 = null
        if (this.state.FN === "+") {
            var3 = parseFloat(this.state.N) + 90;
        } else if (this.state.FN === "-") {
            var3 = parseFloat(this.state.N) - 90;
        }
        post_data(select, 'angles', var1, this.state.N, var3)
    }

    // clickVariablesSave = () => {
        
    // }
//
    clickContactDelete = () => {
        const select = document.querySelector('#contact');
        delete_data(select, 'contact');
        this.newState('contact');
        this.setState({
            contact_state: 0,
        })
    }

    clickPlungerDelete = () => {
        const select = document.querySelector('#plunger');
        delete_data(select, 'plunger');
        this.newState('plunger');
        this.setState({
            plunger_state: 0,
        })
    }

    clickSpringDelete = () => {
        const select = document.querySelector('#spring');
        delete_data(select, 'spring');
        this.newState('spring');
        this.setState({
            spring_state: 0,
        })
    }

    clickAnglesDelete = () => {
        const select = document.querySelector('#angles');
        delete_data(select, 'angles');
        this.newState('angles');
        this.setState({
            angles_state: 0,
        })
    }

    // clickVariablesDelete = () => {
        
    // }
//
    clickContactEdit = () => {
        change_data('contact', this.state.mu, this.state.contactCoord_X, this.state.contactCoord_Y);
        this.activeState('contact');
        this.setState({
            contact_state: 1,
        })

    }

    clickPlungerEdit = () => {
        change_data('plunger', this.state.a, this.state.b, this.state.f);
        this.activeState('plunger');
        this.setState({
            plunger_state: 1,
        })
    }

    clickSpringEdit = () => {
        change_data('spring', this.state.springStiff, this.state.freeLen, this.state.springLen);
        this.activeState('spring');
        this.setState({
            spring_state: 1,
        })
    }

    clickAnglesEdit = () => {

        let var1 = null;
        if (this.state.plungerFric === "0") {
            var1 = 0;
        } else if (this.state.plungerFric === "180") {
            var1 = 180;
        }

        let var3 = null
        if (this.state.FN === "+") {
            var3 = parseFloat(this.state.N) + 90;
        } else if (this.state.FN === "-") {
            var3 = parseFloat(this.state.N) - 90;
        }
        
        change_data('angles', var1, this.state.N, var3);
        this.activeState('angles');
        this.setState({
            angles_state: 1,
        })
    }

    // clickVariablesEdit = () => {
        
    // }
}

let reactInputInstance = ReactDOM.render(<CalcInput />, document.querySelector('#calc_input'));

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');


let scale = 0.8;
let coord = {X: 0, Y: 0}
let mouse = {X: 0, Y: 0}
let pos   = {X: 0, Y: 0}

// initial box size in mm
let mm = 1;

draw_initialization();



    