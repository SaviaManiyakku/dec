img="";
status=""

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML ="Status : Detecting Model"
}

function modelLoaded(){
console.log("Model Loaded");
status= true;
objecDectector.detect(img,gotResult);
}
function preLoad(){
    img = loadimage('image.jpg');
}

function draw(){
image(img ,0,0, 640, 420);
fill("#8092ad");
text("Dog", 50,80);
noFill();
stroke("#424852");
rect(30,50,500,450);

fill('#92b09a');
text("Cat", 320, 120);
noFill();
rect(300,90,270,320);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }

    console.log(results);
}