//pull main tag for background 
var main = document.querySelector('main');

        
//Give background height
main.style.height = '100vh';
//Append Div to document
document.body.appendChild(main);

//Event Listener for  mouse movement
main.addEventListener('mousemove', function() {
    console.log(event);
    var x1 = event.clientX;
    var y1 = event.clientY;

    var x2 = event.screenX;
    var y2 = event.screenY;

    // var gradientDirection = "top right";

    if(x2 < 0) {
        x2 = x2  * (-1);
    }

    let gradientDirection = ( x2 / 3) + "deg" ;


    // if (x2 < 400 && y2 < 400) {
    //     gradientDirection = "top left";
    // } else if (x2 < 400 && y2 < 400) {
    //     gradientDirection = "bottom left";
    // } else if (x2 > 400 && y2 > 400) {
    //     gradientDirection = "bottom right";
    // }
    
    console.log("x: " + x2);
    console.log("y: " + y2);



    main.style.background = "linear-gradient( " + gradientDirection + ", rgb(" + x1/3 + "," + y1/7 + ",27), rgb(" + x2/5 + "," + y2/4 + ",200))";
})

