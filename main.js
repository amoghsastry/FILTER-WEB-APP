mustachX=0;
mustachY=0;
function preload() {
mustach = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup() {
    canvas=createCanvas(400,400);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
image(video,0,0,400,400);
image(mustach, mustachX, mustachY, 80, 40); 


}
function take_snapshot() {
    save("Effective_image.png");
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        mustachX = results[0].pose.nose.x -40;
        mustachY = results[0].pose.nose.y -0;
        console.log("muchad=" + mustachX);
        console.log("muchad=" + mustachY);
        
    }
}

