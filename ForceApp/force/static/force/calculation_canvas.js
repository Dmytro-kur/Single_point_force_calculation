function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function draw_initialization() {

    el = document.querySelector('#body').offsetWidth
    canvas.width = el * 0.9;
    
    if (canvas.width < 600) {
        canvas.height = canvas.width;
    } else {
        canvas.height = 600;
    }

    let mouseState = 'mouseup';

    document.querySelector('#home_btn').addEventListener('click', () => {
        scale   =   0.8;

// coordinate of starting point when mouse was clicked at first
        coord.X = 0;
        coord.Y = 0;

// Mouse position in canvas coordinate system
        mouse.X = 0;
        mouse.Y = 0;

// Value of the shifted position
        pos.X   = 0;
        pos.Y   = 0;
        
        draw(ctx, scale, pos.X, pos.Y, 
            reactInputInstance.state.mu, 
            reactInputInstance.state.contactCoord_X,
            reactInputInstance.state.contactCoord_Y, 
            reactInputInstance.state.a, 
            reactInputInstance.state.b,
            reactInputInstance.state.f,
            reactInputInstance.state.springStiff,
            reactInputInstance.state.freeLen,
            reactInputInstance.state.springLen,
            reactInputInstance.state.Na,
            reactInputInstance.state.Nb,
            reactInputInstance.state.NR,
            reactInputInstance.state.NaFD,
            reactInputInstance.state.NbFD,
            reactInputInstance.state.NRFD,
            reactInputInstance.state.NaD,
            reactInputInstance.state.NbD,
            reactInputInstance.state.NRD,
            reactInputInstance.state.NRT,
            reactInputInstance.state.NRFT,
            reactInputInstance.state.TIX,
            reactInputInstance.state.FTIX,
            reactInputInstance.state.TIY,
            reactInputInstance.state.FTIY,
        );
    })

// canvas scrolling ---------------------------------------------->
    canvas.addEventListener('wheel', function(event) {
        
        scale -= 0.05 * Math.sign(event.deltaY)
        if (scale < 0.01) {
            scale = 0.01;
        }

        draw(ctx, scale, pos.X, pos.Y, 
            reactInputInstance.state.mu, 
            reactInputInstance.state.contactCoord_X,
            reactInputInstance.state.contactCoord_Y, 
            reactInputInstance.state.a, 
            reactInputInstance.state.b,
            reactInputInstance.state.f,
            reactInputInstance.state.springStiff,
            reactInputInstance.state.freeLen,
            reactInputInstance.state.springLen,
            reactInputInstance.state.Na,
            reactInputInstance.state.Nb,
            reactInputInstance.state.NR,
            reactInputInstance.state.NaFD,
            reactInputInstance.state.NbFD,
            reactInputInstance.state.NRFD,
            reactInputInstance.state.NaD,
            reactInputInstance.state.NbD,
            reactInputInstance.state.NRD,
            reactInputInstance.state.NRT,
            reactInputInstance.state.NRFT,
            reactInputInstance.state.TIX,
            reactInputInstance.state.FTIX,
            reactInputInstance.state.TIY,
            reactInputInstance.state.FTIY,
        );
    })

// detecting cursor
    canvas.addEventListener('mouseover', () => {
        disableScroll();
        canvas.addEventListener('mousemove', function(event) {
            var rect = canvas.getBoundingClientRect();

            mouse.X = event.clientX - rect.left;
            mouse.Y = event.clientY - rect.top;

            if (mouseState === 'mousedown') {
                pos.X = mouse.X - coord.X;
                pos.Y = mouse.Y - coord.Y;

                draw(ctx, scale, pos.X, pos.Y, 
                    reactInputInstance.state.mu, 
                    reactInputInstance.state.contactCoord_X,
                    reactInputInstance.state.contactCoord_Y, 
                    reactInputInstance.state.a, 
                    reactInputInstance.state.b,
                    reactInputInstance.state.f,
                    reactInputInstance.state.springStiff,
                    reactInputInstance.state.freeLen,
                    reactInputInstance.state.springLen,
                    reactInputInstance.state.Na,
                    reactInputInstance.state.Nb,
                    reactInputInstance.state.NR,
                    reactInputInstance.state.NaFD,
                    reactInputInstance.state.NbFD,
                    reactInputInstance.state.NRFD,
                    reactInputInstance.state.NaD,
                    reactInputInstance.state.NbD,
                    reactInputInstance.state.NRD,
                    reactInputInstance.state.NRT,
                    reactInputInstance.state.NRFT,
                    reactInputInstance.state.TIX,
                    reactInputInstance.state.FTIX,
                    reactInputInstance.state.TIY,
                    reactInputInstance.state.FTIY,
                );
            }
        })

    })   
    canvas.addEventListener('mouseout', function() {
        enableScroll();
    })

// translate context
    canvas.addEventListener('mousedown', (event)=> {
        if (event.button === 0) {
            event.preventDefault();
            mouseState = 'mousedown'

            coord.X = mouse.X - pos.X;
            coord.Y = mouse.Y - pos.Y;

            document.body.addEventListener('mouseup', (event) => {
                if (event.button === 0) {
                    event.preventDefault();
                    mouseState = 'mouseup'

                    coord.X = mouse.X - pos.X;
                    coord.Y = mouse.Y - pos.Y;
                }
            })
        }
    })

// window resizing ---------------------------------------------->
    window.addEventListener('resize', (event) => {
        event.preventDefault();

        el = document.querySelector('#body').offsetWidth
        canvas.width = el * 0.9;
        
        if (canvas.width < 600) {
            canvas.height = canvas.width;
        } else {
            canvas.height = 600;
        }

        draw(ctx, scale, pos.X, pos.Y, 
            reactInputInstance.state.mu, 
            reactInputInstance.state.contactCoord_X,
            reactInputInstance.state.contactCoord_Y, 
            reactInputInstance.state.a, 
            reactInputInstance.state.b,
            reactInputInstance.state.f,
            reactInputInstance.state.springStiff,
            reactInputInstance.state.freeLen,
            reactInputInstance.state.springLen,
            reactInputInstance.state.Na,
            reactInputInstance.state.Nb,
            reactInputInstance.state.NR,
            reactInputInstance.state.NaFD,
            reactInputInstance.state.NbFD,
            reactInputInstance.state.NRFD,
            reactInputInstance.state.NaD,
            reactInputInstance.state.NbD,
            reactInputInstance.state.NRD,
            reactInputInstance.state.NRT,
            reactInputInstance.state.NRFT,
            reactInputInstance.state.TIX,
            reactInputInstance.state.FTIX,
            reactInputInstance.state.TIY,
            reactInputInstance.state.FTIY,
        );
    })

    // Vectors scaling

    document.querySelector('#scale_up_btn').addEventListener('click', () => {
        vector_scaling += 0.1;
        document.querySelector('#vectors_scaling').innerHTML = vector_scaling.toFixed(2);
        draw(ctx, scale, pos.X, pos.Y, 
            reactInputInstance.state.mu, 
            reactInputInstance.state.contactCoord_X,
            reactInputInstance.state.contactCoord_Y, 
            reactInputInstance.state.a, 
            reactInputInstance.state.b,
            reactInputInstance.state.f,
            reactInputInstance.state.springStiff,
            reactInputInstance.state.freeLen,
            reactInputInstance.state.springLen,
            reactInputInstance.state.Na,
            reactInputInstance.state.Nb,
            reactInputInstance.state.NR,
            reactInputInstance.state.NaFD,
            reactInputInstance.state.NbFD,
            reactInputInstance.state.NRFD,
            reactInputInstance.state.NaD,
            reactInputInstance.state.NbD,
            reactInputInstance.state.NRD,
            reactInputInstance.state.NRT,
            reactInputInstance.state.NRFT,
            reactInputInstance.state.TIX,
            reactInputInstance.state.FTIX,
            reactInputInstance.state.TIY,
            reactInputInstance.state.FTIY,
        );
    });

    document.querySelector('#scale_down_btn').addEventListener('click', () => {
        
        if (Math.sign(vector_scaling - 0.1) === 1) {
            vector_scaling -= 0.1;
        } else {
            // pass
        }
        document.querySelector('#vectors_scaling').innerHTML = vector_scaling.toFixed(2);
        draw(ctx, scale, pos.X, pos.Y, 
            reactInputInstance.state.mu, 
            reactInputInstance.state.contactCoord_X,
            reactInputInstance.state.contactCoord_Y, 
            reactInputInstance.state.a, 
            reactInputInstance.state.b,
            reactInputInstance.state.f,
            reactInputInstance.state.springStiff,
            reactInputInstance.state.freeLen,
            reactInputInstance.state.springLen,
            reactInputInstance.state.Na,
            reactInputInstance.state.Nb,
            reactInputInstance.state.NR,
            reactInputInstance.state.NaFD,
            reactInputInstance.state.NbFD,
            reactInputInstance.state.NRFD,
            reactInputInstance.state.NaD,
            reactInputInstance.state.NbD,
            reactInputInstance.state.NRD,
            reactInputInstance.state.NRT,
            reactInputInstance.state.NRFT,
            reactInputInstance.state.TIX,
            reactInputInstance.state.FTIX,
            reactInputInstance.state.TIY,
            reactInputInstance.state.FTIY,
        );
    })
}

function multiply(a, b) {
    // i.e. input:
    // let a = [[8, 3], [2, 4], [3, 6]],
    //     b = [[1, 2, 3], [4, 6, 8]];

    let aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows

    for (let r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (let c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (let i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
}

function rotate(theta, x, y) {
    R = [
        [Math.cos(-theta*Math.PI/180), -Math.sin(-theta*Math.PI/180)],
        [Math.sin(-theta*Math.PI/180),  Math.cos(-theta*Math.PI/180)]
    ]

    m = multiply( R, [[x], [y]] )
    result = {
        X: m[0][0],
        Y: m[1][0],
    }
    return result
}

function draw(ctx, scale, posX, posY,
    raw_mu, 
    raw_contactCoord_X, 
    raw_contactCoord_Y, 
    raw_a,
    raw_b,
    raw_f,
    raw_springStiff,
    raw_freeLen,
    raw_springLen,
    raw_Na,
    raw_Nb,
    raw_NR,
    raw_NaFD,
    raw_NbFD,
    raw_NRFD,
    raw_NaD,
    raw_NbD,
    raw_NRD,
    raw_NRT,
    raw_NRFT,
    raw_TIX,
    raw_FTIX,
    raw_TIY,
    raw_FTIY,
    ) {

    const mu = parseFloat(raw_mu)
    const contactCoord_X = parseFloat(raw_contactCoord_X)
    const contactCoord_Y = parseFloat(raw_contactCoord_Y)
    const a = parseFloat(raw_a)
    const b = parseFloat(raw_b)
    const f = parseFloat(raw_f)
    const springStiff = parseFloat(raw_springStiff)
    const freeLen = parseFloat(raw_freeLen)
    const springLen = parseFloat(raw_springLen)
    const Na = parseFloat(raw_Na)
    const Nb = parseFloat(raw_Nb)
    const NR = parseFloat(raw_NR)
    const NaFD = parseFloat(raw_NaFD)
    const NbFD = parseFloat(raw_NbFD)
    const NRFD = parseFloat(raw_NRFD)
    const NaD = parseFloat(raw_NaD)
    const NbD = parseFloat(raw_NbD)
    const NRD = parseFloat(raw_NRD)
    const NRT = parseFloat(raw_NRT)
    const NRFT = parseFloat(raw_NRFT)
    const TIX = parseFloat(raw_TIX)
    const FTIX = parseFloat(raw_FTIX)
    const TIY = parseFloat(raw_TIY)
    const FTIY = parseFloat(raw_FTIY)
    
// dimensions of a reference rectangle
    const rect = {
        startX: ( canvas.width * (1 - scale) ) / 2 + posX,
        startY: ( canvas.height * (1 - scale) ) / 2 + posY,
        width: canvas.width * scale,
        height: canvas.height * scale,
    }

// Center of the canvas
    const origin = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    }
// Absolute coordinates of a beam
    const C = {
        x: contactCoord_X,
        y: contactCoord_Y,
    }

    const B = {
        x: C.x - a,
        y: contactCoord_Y,
    }

    const A = {
        x: B.x - b,
        y: contactCoord_Y,
    }

// Find maximum possible scale factor for fitting rectangle
    const max_width = Math.max(0, A.x, B.x, C.x) - Math.min(0, A.x, B.x, C.x);
    const max_height = Math.max(0, A.y, B.y, C.y) - Math.min(0, A.y, B.y, C.y);

    const parse_scale_X = rect.width/max_width;
    const parse_scale_Y = rect.height/max_height;

    let parse_scale = 1;

    if (parse_scale_X < parse_scale_Y) {
        parse_scale = parse_scale_X;
    } else if (parse_scale_Y < parse_scale_X) {
        parse_scale = parse_scale_Y;
    } else if (parse_scale_Y === parse_scale_X) {
        parse_scale = parse_scale_X;
    }

// Floating origin
    let _O = {
        x: rect.startX + rect.width/2,
        y: rect.startY + rect.height/2,
    }
// Correction of floating origin

    if (Math.min(0, A.x, B.x, C.x) === 0) {
        _O.x = _O.x - (max_width * parse_scale)/2;

    } else if (Math.max(0, A.x, B.x, C.x) === 0) {
        _O.x = _O.x + (max_width * parse_scale)/2;

    } else if (Math.min(0, A.x, B.x, C.x) !== 0
    && Math.max(0, A.x, B.x, C.x) !== 0) {
        _O.x = _O.x + (max_width * parse_scale)/2 - Math.max(0, A.x, B.x, C.x) * parse_scale;
    }

    if (Math.min(0, A.y, B.y, C.y) === 0) {
        _O.y = _O.y + (max_height * parse_scale)/2;

    } else if (Math.max(0, A.y, B.y, C.y) === 0) {
        _O.y = _O.y - (max_height * parse_scale)/2;
    }

// Relative coordinates of a beam
    const _C = {
        x: _O.x + C.x * parse_scale,
        y: _O.y - C.y * parse_scale,
    }

    const _B = {
        x: _O.x + B.x * parse_scale,
        y: _O.y - B.y * parse_scale,
    }

    const _A = {
        x: _O.x + A.x * parse_scale,
        y: _O.y - A.y * parse_scale,
    }

// Clear all previous drawings
    ctx.clearRect(0, 0, canvas.clientWidth + 100, canvas.height);

// Build rectangle as a reference (optionally)
    // ctx.lineWidth = 0.5;
    // ctx.strokeStyle = 'black';
    // ctx.strokeRect(rect.startX, rect.startY, rect.width, rect.height)



// Build first part of beam
    let W = 0.4 * parse_scale
    // W - width of the beam

    ctx.strokeStyle = 'green';
    ctx.lineWidth = W/5;
    ctx.strokeRect(_A.x, (_A.y - W/2), Math.abs(_B.x - _A.x), W)

// Build second part of beam
    ctx.strokeStyle = 'coral';
    ctx.lineWidth = W/5;
    ctx.strokeRect(_B.x, (_B.y - W/2), Math.abs(_B.x - _C.x), W)

    // Build floating origin

    let R = 0.4 * parse_scale
    ctx.beginPath();
    ctx.arc(_O.x, _O.y, R, 0, Math.PI*2);
    ctx.strokeStyle = 'purple';
    ctx.stroke();

// Build rigid fixation
    function build_rigid_fix(P, W, n) {
        // P - point, where fixation was added,
        // W - width of the beam
        // n - number of lines for ground

        ctx.strokeStyle = 'brown';
        ctx.lineWidth = W/3;
        ctx.beginPath();
    
        ctx.moveTo(P.x - 2*W, P.y + W);
        ctx.lineTo(P.x + 2*W, P.y + W);
    
        ctx.moveTo(P.x - 2*W, P.y - W);
        ctx.lineTo(P.x + 2*W, P.y - W);
        ctx.stroke();

        ctx.lineWidth = W/6;
        ctx.beginPath();

        for (let i = 0; i < n; i++) {

            ctx.moveTo(P.x - 2*W + i*4*W/n, P.y + W);
            ctx.lineTo(P.x - 2*W + i*4*W/n + 4*W/n, P.y + W + 4*W/n);

            ctx.moveTo(P.x + 2*W - i*4*W/n, P.y - W);
            ctx.lineTo(P.x + 2*W - i*4*W/n - 4*W/n, P.y - W - 4*W/n);
        }

        ctx.stroke();
    }

    build_rigid_fix(_A, W, 6);
    build_rigid_fix(_B, W, 6);

    function build_spring(n, W, L, color) {
        // n - number of turns
        // W - width of the element
        // L - spring length

        ctx.strokeStyle = color;
        ctx.lineWidth = W/10;
        ctx.beginPath();
    

        for (let i = 1; i < n + 1; i++) {
            ctx.moveTo(_A.x - i * (L/n) + (L/n)/2,   _A.y + (W/2));
            ctx.lineTo(_A.x - i * (L/n),             _A.y - (W/2));
            ctx.moveTo(_A.x - i * (L/n) + (L/n)/2,   _A.y + (W/2));
            ctx.lineTo(_A.x - i * (L/n) + 2*(L/n)/2, _A.y - (W/2));
        }
        ctx.stroke();

        ctx.strokeStyle = color;
        ctx.lineWidth = W/5;
        ctx.beginPath();
        ctx.moveTo(_A.x - L, _A.y + (W/1.5));
        ctx.lineTo(_A.x - L, _A.y - (W/1.5));
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(_A.x - L,     _A.y + (W/1.5));
        ctx.lineTo(_A.x - L - W, _A.y + (W/1.5));
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(_A.x - L - W, _A.y - (W/1.5));
        ctx.lineTo(_A.x - L,     _A.y - (W/1.5));
        ctx.stroke();

    }

    build_spring(10, W, springLen * parse_scale, '#145DA0')

    function reaction(P, R, A, s, color, Xshift=0, Yshift=0) {
        // P - point where force was applied
        // R - reaction force value
        // A - direction of force
        // s - scale for force value

        const S = s * parse_scale

        ctx.fillStyle = color;
        ctx.lineWidth = W/10;
        ctx.beginPath();

        // ARROW
        if (Math.sign( (Math.abs(R) - 1.328) ) == 1) {
            const zero = {
                X: P.x + Xshift,
                Y: P.y + Yshift,
            }
            const one = {
                X: P.x + Xshift + Math.abs(R) * S,
                Y: P.y + Yshift,
            }
            const two = {
                X: one.X - 1.449 * S,
                Y: one.Y + 0.388 * S,
            }
            const three = {
                X: one.X - 1.328 * S,
                Y: one.Y + 0.2 * S,
            }
            const four = {
                X: zero.X,
                Y: zero.Y + 0.2 * S,
            }
            const five = {
                X: zero.X,
                Y: zero.Y - 0.2 * S,
            }
            const six = {
                X: three.X,
                Y: one.Y - 0.2 * S,
            }
            const seven = {
                X: two.X,
                Y: one.Y - 0.388 * S,
            }
    
            transform1 = rotate(A, one.X - zero.X, one.Y - zero.Y)
            transform2 = rotate(A, two.X - zero.X, two.Y - zero.Y)
            transform3 = rotate(A, three.X - zero.X, three.Y - zero.Y)
            transform4 = rotate(A, four.X - zero.X, four.Y - zero.Y)
            transform5 = rotate(A, five.X - zero.X, five.Y - zero.Y)
            transform6 = rotate(A, six.X - zero.X, six.Y - zero.Y)
            transform7 = rotate(A, seven.X - zero.X, seven.Y - zero.Y)
    
            ctx.moveTo(zero.X + transform1.X, zero.Y + transform1.Y);
            ctx.lineTo(zero.X + transform2.X, zero.Y + transform2.Y);
            ctx.lineTo(zero.X + transform3.X, zero.Y + transform3.Y);
            ctx.lineTo(zero.X + transform4.X, zero.Y + transform4.Y);
            ctx.lineTo(zero.X + transform5.X, zero.Y + transform5.Y);
            ctx.lineTo(zero.X + transform6.X, zero.Y + transform6.Y);
            ctx.lineTo(zero.X + transform7.X, zero.Y + transform7.Y);
            ctx.closePath();

        } else if (Math.sign( (Math.abs(R) - 1.328) ) == -1) {
            const zero = {
                X: P.x + Xshift,
                Y: P.y + Yshift,
            }
            const one = {
                X: P.x + Xshift + (Math.abs(R)) * S,
                Y: P.y + Yshift,
            }
            const two = {
                X: one.X - 1.449 * S,
                Y: one.Y + 0.388 * S,
            }
            const three = {
                X: one.X - 1.2 * S,
                Y: zero.Y,
            }
            const four = {
                X: two.X,
                Y: one.Y - 0.388 * S,
            }
    
            transform1 = rotate(A, one.X - zero.X, one.Y - zero.Y)
            transform2 = rotate(A, two.X - zero.X, two.Y - zero.Y)
            transform3 = rotate(A, three.X - zero.X, three.Y - zero.Y)
            transform4 = rotate(A, four.X - zero.X, four.Y - zero.Y)
    
            ctx.moveTo(zero.X + transform1.X, zero.Y + transform1.Y);
            ctx.lineTo(zero.X + transform2.X, zero.Y + transform2.Y);
            ctx.lineTo(zero.X + transform3.X, zero.Y + transform3.Y);
            ctx.lineTo(zero.X + transform4.X, zero.Y + transform4.Y);
            ctx.closePath();
        }

        ctx.fill();
    }



    let colors = [
        '#98D7C2',
        '#167D7F',
        '#29A0B1',
        '#145DA0',
        '#2E8BC0',
        '#B1D4E0',
        '#659DBD'
    ]

    const color1 = Math.floor(Math.random() * colors.length);
    reaction(_C, NR, NRD, vector_scaling, colors[color1]);

    const color2 = Math.floor(Math.random() * colors.length);
    reaction(_C, NR*mu, NRFD, vector_scaling, colors[color2]);
    
    const color3 = Math.floor(Math.random() * colors.length);
    reaction(_A, Na, NaD, vector_scaling, colors[color3]);
    
    const color4 = Math.floor(Math.random() * colors.length);
    reaction(_A, Math.abs(Na*f), NaFD, vector_scaling, colors[color4], 0, -W * vector_scaling);
    
    const color5 = Math.floor(Math.random() * colors.length);
    reaction(_B, Nb, NbD, vector_scaling, colors[color5]);
    
    const color6 = Math.floor(Math.random() * colors.length);
    reaction(_B,  Math.abs(Nb*f), NbFD, vector_scaling, colors[color6], 0, -W * vector_scaling);
    
    const _LOAD = {
        A: 0,
        R: springStiff * (freeLen - springLen),
        x: _A.x - springStiff * (freeLen - springLen) * parse_scale * vector_scaling,
        y: _A.y,
    }
    reaction(_LOAD,  Math.abs(_LOAD.R), _LOAD.A, vector_scaling, 'red');
    
    function text(P, R, A, Xshift, Yshift, mode) {
        // P - point where text will be raised;
        // R - displayed value;
        // A - direction of force (force case);
        // mode - 0 - force (default);
               // 1 - torque; 
               // 2 - distance.

        ctx.lineWidth = 1;   
        ctx.fillStyle = 'black';
        ctx.font = "15px Arial";

        if (mode === 0) {
            ctx.fillText(`(${Math.abs(R).toFixed(2)} N; ${(A).toFixed(0)} deg)`, P.x + Xshift, P.y + Yshift);
        } else if (mode === 1) {
            ctx.fillText(`${(R).toFixed(2)} N*mm`, P.x + Xshift, P.y + Yshift);
        } else if (mode === 2) {
            ctx.fillText(`${(R).toFixed(2)} mm`, P.x + Xshift, P.y + Yshift);
        }
    }


    const text_NR = {
        x: ( _C.x + (Math.abs(NR) * Math.cos(NRD*Math.PI/180)) * vector_scaling * parse_scale),
        y: ( _C.y - (Math.abs(NR) * Math.sin(NRD*Math.PI/180)) * vector_scaling * parse_scale),
    }
    const text_NR_mu = {
        x: ( _C.x + (Math.abs(NR*mu) * Math.cos(NRFD*Math.PI/180)) * vector_scaling * parse_scale),
        y: ( _C.y - (Math.abs(NR*mu) * Math.sin(NRFD*Math.PI/180)) * vector_scaling * parse_scale),
    }
    const text_Na = {
        x: ( _A.x + (Math.abs(Na) * Math.cos(NaD*Math.PI/180)) * vector_scaling * parse_scale),
        y: ( _A.y - (Math.abs(Na) * Math.sin(NaD*Math.PI/180)) * vector_scaling * parse_scale),
    }
    const text_Na_f = {
        x: ( _A.x + (Math.abs(Na*f) * Math.cos(NaFD*Math.PI/180)) * vector_scaling * parse_scale),
        y: ( _A.y - (Math.abs(Na*f) * Math.sin(NaFD*Math.PI/180)) * vector_scaling * parse_scale),
    } 
    const text_Nb = {
        x: ( _B.x + (Math.abs(Nb) * Math.cos(NbD*Math.PI/180)) * vector_scaling * parse_scale),
        y: ( _B.y - (Math.abs(Nb) * Math.sin(NbD*Math.PI/180)) * vector_scaling * parse_scale),
    }
    const text_Nb_f = {
        x: ( _B.x + (Math.abs(Nb*f) * Math.cos(NbFD*Math.PI/180)) * vector_scaling * parse_scale),
        y: ( _B.y - (Math.abs(Nb*f) * Math.sin(NbFD*Math.PI/180)) * vector_scaling * parse_scale),
    } 


    text(text_NR, NR, NRD, 0, 0, 0);
    text(text_NR_mu, NR*mu, NRFD, 0, 0, 0);
    text(text_Na, Na, NaD, 0, 0, 0);
    text(text_Na_f, Math.abs(Na*f), NaFD, 0, -W * vector_scaling, 0);
    text(text_Nb, Nb, NbD, 0, 0, 0);
    text(text_Nb_f,  Math.abs(Nb*f), NbFD, 0, -W * vector_scaling, 0);
    text(_LOAD, Math.abs(_LOAD.R), _LOAD.A, 0, 0, 0);
    
    // Torque text
    text(_O, (NRT + NRFT), 0, 0, 0, 1)

    // INTERSECTIONS

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'black';

    // TIX - torque intersection X
    // TIY - torque intersection Y
    // FTIX - friction torque intersection X
    // FTIY - friction torque intersection Y

    const new_TIX = _O.x + TIX * parse_scale
    const new_TIY = _O.y - TIY * parse_scale
    const new_FTIX = _O.x + FTIX * parse_scale
    const new_FTIY = _O.y - FTIY * parse_scale

    ctx.beginPath();
    ctx.moveTo(new_TIX + (origin.y * 0.03), new_TIY - (origin.y * 0.03));
    ctx.lineTo(new_TIX - (origin.y * 0.03), new_TIY + (origin.y * 0.03));
    ctx.moveTo(new_TIX - (origin.y * 0.03), new_TIY - (origin.y * 0.03));
    ctx.lineTo(new_TIX + (origin.y * 0.03), new_TIY + (origin.y * 0.03));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(new_FTIX - (origin.y * 0.03), new_FTIY + (origin.y * 0.03));
    ctx.lineTo(new_FTIX + (origin.y * 0.03), new_FTIY - (origin.y * 0.03));
    ctx.moveTo(new_FTIX - (origin.y * 0.03), new_FTIY - (origin.y * 0.03));
    ctx.lineTo(new_FTIX + (origin.y * 0.03), new_FTIY + (origin.y * 0.03));
    ctx.stroke();

    // Dashed line

    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.moveTo(_O.x, _O.y);
    ctx.lineTo(new_TIX, new_TIY);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.moveTo(_O.x, _O.y);
    ctx.lineTo(new_FTIX, new_FTIY);
    ctx.stroke();

    ctx.setLineDash([]);

    // distance text

    const text_D = {
        x: _O.x + (new_TIX - _O.x)/2,
        y: _O.y - (_O.y - new_TIY)/2,
    };
    const Val_TI = Math.sqrt( Math.pow(TIX, 2) + Math.pow(TIY, 2) );
    text(text_D, Val_TI, 0, 0, 0, 2);



    const text_FD = {
        x: _O.x + (new_FTIX - _O.x)/2,
        y: _O.y - (_O.y - new_FTIY)/2,
    } 
    const Val_FTI = Math.sqrt( Math.pow(FTIX, 2) + Math.pow(FTIY, 2) );
    text(text_FD, Val_FTI, 0, 0, 0, 2);

// Grid

// Central lines

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(_O.x,            0);
    ctx.lineTo(_O.x, 2 * origin.y);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(           0, _O.y);
    ctx.lineTo(2 * origin.x, _O.y);
    ctx.closePath();
    ctx.stroke();
    
// box size in px
    let box = mm * parse_scale;

    while (box > 50) {
        mm /= 2;
        box = mm * parse_scale;
    }

    while (box < 20) {
        mm *= 2;
        box = mm * parse_scale;
    }
    
    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";

    let grid_right = Math.ceil( (canvas.width - _O.x) / box );
    for (let i = 1; i < grid_right; i++) {
        if (i % 5 == 0) {
            ctx.lineWidth = 0.25;
            ctx.beginPath();
            ctx.moveTo(_O.x + i * box,            0);
            ctx.lineTo(_O.x + i * box, 2 * origin.y);
            ctx.closePath();
            ctx.stroke();

            ctx.fillText(Math.round(i*mm*1000) / 1000, _O.x + i * box - 20, 15);
            ctx.fillText(Math.round(i*mm*1000) / 1000, _O.x + i * box - 20, 2 * origin.y);
        } else {
            ctx.lineWidth = 0.1;
            ctx.beginPath();
            ctx.moveTo(_O.x + i * box,            0);
            ctx.lineTo(_O.x + i * box, 2 * origin.y);
            ctx.closePath();
            ctx.stroke();
        }

    }
    let grid_left = Math.ceil( (_O.x) / box );
    for (let i = 1; i < grid_left; i++) {
        if (i % 5 == 0) {
            ctx.lineWidth = 0.25;
            ctx.beginPath();
            ctx.moveTo(_O.x - i * box,            0);
            ctx.lineTo(_O.x - i * box, 2 * origin.y);
            ctx.closePath();
            ctx.stroke();

            ctx.fillText(-Math.round(i*mm*1000) / 1000, _O.x - i * box - 20, 15);
            ctx.fillText(-Math.round(i*mm*1000) / 1000, _O.x - i * box - 20, 2 * origin.y);
        } else {
            ctx.lineWidth = 0.1;
            ctx.beginPath();
            ctx.moveTo(_O.x - i * box,            0);
            ctx.lineTo(_O.x - i * box, 2 * origin.y);
            ctx.closePath();
            ctx.stroke();
        }
    }
    let grid_bottom = Math.ceil( (canvas.height - _O.y) / box );
    for (let i = 1; i < grid_bottom; i++) {
        if (i % 5 == 0) {
            ctx.lineWidth = 0.25;
            ctx.beginPath();
            ctx.moveTo(           0, _O.y + i * box);
            ctx.lineTo(2 * origin.x, _O.y + i * box);
            ctx.closePath();
            ctx.stroke();

            ctx.fillText(-Math.round(i*mm*1000) / 1000, 0                , _O.y + i * box);
            ctx.fillText(-Math.round(i*mm*1000) / 1000, 2 * origin.x - 45, _O.y + i * box);
        } else {
            ctx.lineWidth = 0.1;
            ctx.beginPath();
            ctx.moveTo(           0, _O.y + i * box);
            ctx.lineTo(2 * origin.x, _O.y + i * box);
            ctx.closePath();
            ctx.stroke();
        }
    }
    let grid_top = Math.ceil( (_O.y) / box );
    for (let i = 1; i < grid_top; i++) {
        if (i % 5 == 0) {
            ctx.lineWidth = 0.25;
            ctx.beginPath();
            ctx.moveTo(           0, _O.y - i * box);
            ctx.lineTo(2 * origin.x, _O.y - i * box);
            ctx.closePath();
            ctx.stroke();

            ctx.fillText(Math.round(i*mm*1000) / 1000, 0                , _O.y - i * box);
            ctx.fillText(Math.round(i*mm*1000) / 1000, 2 * origin.x - 40, _O.y - i * box); 
        } else {
            ctx.lineWidth = 0.1;
            ctx.beginPath();
            ctx.moveTo(           0, _O.y - i * box);
            ctx.lineTo(2 * origin.x, _O.y - i * box);
            ctx.closePath();
            ctx.stroke();
        }
    }

// lines through center (cross)

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y - (origin.y * 0.03));
    ctx.lineTo(origin.x, origin.y + (origin.y * 0.03));
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(origin.x - (origin.y * 0.03), origin.y);
    ctx.lineTo(origin.x + (origin.y * 0.03), origin.y);
    ctx.closePath();
    ctx.stroke();

// Clear rectangle for coordinates
    ctx.clearRect(0, 0, 150, 30);

// Build coordinates in upper left corner
    const absolute_coordinate_X = (-(_O.x - origin.x)/parse_scale).toFixed(2);
    const absolute_coordinate_Y = ((_O.y - origin.y)/parse_scale).toFixed(2);
    
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.rect(0, 0, 150, 30);
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";
    ctx.fillText(`X: ${absolute_coordinate_X}; Y: ${absolute_coordinate_Y}`, 15, 20);
}

// https://www.youtube.com/watch?v=vxljFhP2krI&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=4
// https://www.canva.com/colors/color-palettes/
// https://css-tricks.com/clipping-masking-css/
// https://www.photopea.com/