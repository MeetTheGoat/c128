song = ""
leftWristX =0;
leftWristY =0;
righttWristX =0;
rightWristY =0;

function preload()
{
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded () {
    console.log('PoseNet Is Initialized');
}


function draw() {
    image(video, 0, 0, 600, 500);
}



function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].poseleftWrist.x;
        leftWristY = results[0].poseleftWrist.y;
        console.log("leftWristX =" + leftWrist +" leftWristY ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX +"rightWristY ="+ rightWristY);


    }
}

