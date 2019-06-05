//pull main tag for background 
let main = document.querySelector('main');
// let gameBody = document.selectElementByClass('.game-body');
// let section = document.querySelectorAll('section');

//Give background height
main.style.height = '100vh';
//Append Div to document
document.body.appendChild(main);
// document.body.appendChild(section);


//Event Listener for  mouse movement
main.addEventListener('mousemove', function() {
    // console.log(event);
    let x1 = event.clientX;
    let y1 = event.clientY;

    let x2 = event.screenX;
    let y2 = event.screenY;

    // let gradientDirection = "top right";

    if(x2 < 0) {
        x2 = x2  * (-1);
    }

    let gradientDirection = (Math.abs( x2 - y2) / 2) + "deg" ;
    
    // console.log("x: " + x2);
    // console.log("y: " + y2);



    main.style.background = "linear-gradient( " + gradientDirection + ", rgb(" + x1/3 + "," + y1/7 + ",27), rgb(" + x2/5 + "," + y2/4 + ",200))";
    // section.style.background = "linear-gradient( " + gradientDirection + ", rgb(" + x1/3 + "," + y1/7 + ",27), rgb(" + x2/5 + "," + y2/4 + ",200))";


});

