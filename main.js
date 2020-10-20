canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");

car_images_array = ["Racetrack1.jpg","Racetrack2.jpg","Racetrack3.jpg"];

var random_no = Math.floor (Math.random()* 3);
console.log(random_no);

var car1_width = 120;
var car1_height = 70;
var car1_image = "Car1.png";
var car1_X = 10;
var car1_Y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "Car2.png";
var car2_X = 10;
var car2_Y = 100;

var background_img = car_images_array[random_no];


function add(){

background_imgTag = new Image();
background_imgTag.onload = upload_background;
background_imgTag.src = background_img;

car1_imgTag = new Image();
car1_imgTag.onload = upload_car1;
car1_imgTag.src = car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = upload_car2;
car2_imgTag.src = car2_image;

}

function upload_background(){

ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function upload_car1(){
    
ctx.drawImage(car1_imgTag,car1_X,car1_Y,car1_width,car1_height);

}

function upload_car2(){
    
    ctx.drawImage(car2_imgTag,car2_X,car2_Y,car2_width,car2_height);
    
    }

window.addEventListener("keydown",my_keyDown);

function my_keyDown(e){

var keypress = e.keyCode;
console.log(keypress);
if (keypress == '37'){
    car1_left();
    console.log("left");
}
if (keypress == '38'){
    car1_up();
    console.log("up");
}
if (keypress == '39'){
    car1_right();
    console.log("right");
}
if (keypress == '40'){
    car1_down();
    console.log("down");
}

if (keypress == '87'){
    car2_up();
    console.log("W");
}

if (keypress == '65'){
    car2_left();
    console.log("A");
}

if (keypress == '83'){
    car2_down();
    console.log("S");
}

if (keypress == '68'){
    car2_right();
    console.log("D");
}

}

function car1_up() {

if ( car1_Y >= 0){

car1_Y = car1_Y-10;
console.log ("when up arrow is pressed , x=" + car1_X + "& y=" + car1_Y);
upload_background();
upload_car1();
upload_car2();

}

}

function car1_down() {

    if ( car1_Y <= 500){
    
    car1_Y = car1_Y+10;
    console.log ("when down arrow is pressed , x=" + car1_X + "& y=" + car1_Y);
    upload_background();
    upload_car1();
    upload_car2();
    
    }
    
    }

    function car1_left() {

        if ( car1_X >= 0){
        
        car1_X = car1_X-10;
        console.log ("when left arrow is pressed , x=" + car1_X + "& y=" + car1_Y);
        upload_background();
        upload_car1();
        upload_car2();
        
        
        }
        
        }

        function car1_right() {

            if ( car1_X <= 500){
            
            car1_X = car1_X+10;
            console.log ("when right arrow is pressed , x=" + car1_X + "& y=" + car1_Y);
            upload_background();
            upload_car1();
            upload_car2();
            
            }
            
            }

            if(car1_X > 700){

             console.log("Car1 Won")
             document.getElementById('game_status').innerHTML = "CAR1 WON!!!!!!"

            }

