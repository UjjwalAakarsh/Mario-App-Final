function preload() {
	world_start = loadSound("world_start.wav");
	coinsound= loadSound("coin.wav")
	gameoversound=loadSound("gameover.wav")
	jumpsound=loadSound("jump.wav")
	kicksound=loadSound("kick.wav")
	mariodiesound=loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	//To Put Any p5.js Component like canvas,video inside an html element
	//Component_Name.parent("html_id")
	canvas.parent("canvas")
	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console")

	poseNet = ml5.poseNet(video, modelLoaded);
  	poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}
function modelLoaded() {
	console.log('Model Loaded!');
  }
  function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    
  }
}






