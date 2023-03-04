noseX=0;
noseY=0;


function preload(){
imagen=loadImage("nerd.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.position(150,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    conte = "";
    poseNet=ml5.poseNet(video, modeloaded);
    poseNet.on("pose", gotPose);
}

function modeloaded(){
    console.log("positive_poseNet");
}
function gotPose(results){
    if (results.length>0) {
        noseX=results[0].pose.nose.x -260;
        noseY=results[0].pose.nose.y -190;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(imagen,noseX,noseY,142,140)
}