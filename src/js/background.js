//Background Generation

//=====Variables====//
const noise = new FastNoiseLite(Math.random()*10000);
const canvas = document.getElementById("background");
const canvasContext = canvas.getContext('2d');
const moveAmount = 20; //Amount to move by mouse
const thickness = 0.03; //Thickness of lines
const noiseScale = 0.3; // Scale of noise
canvas.width = window.screen.width
canvas.height = window.screen.height;
noise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);
noise.SetFractalType(FastNoiseLite.FractalType.FBm);
var image = canvasContext.createImageData(canvas.width, canvas.height);
var pixels = new Array(canvas.width);
var offsetX = 0;
var offsetY = 0;

//=======Main=======//
createNoiseData();
createImage();

//====Functions====//
document.onmousemove = function(e) {
	offsetX = -Math.floor((e.x/canvas.width-0.5) * moveAmount);
	offsetY = -Math.floor((e.y/canvas.height-0.5) * moveAmount);
	canvas.style.left = `${offsetX}px`;
	canvas.style.top = `${offsetY-moveAmount}px`;}

function createNoiseData(){
	for(var i = 0;i<canvas.width;i++){
		pixels[i] = new Array(canvas.height)
		for(var j = 0;j<canvas.height;j++){
			pixels[i][j] = noise.GetNoise(i * noiseScale , j * noiseScale);}}}

function createImage(){
	function get_color(reverse) {
		if(reverse) return curTextRGB;
		else return curBckgRGB;}
	function setColor(cell,r,g,b,a){
		image.data[cell]=r;
		image.data[cell+1]=g;
		image.data[cell+2]=b;
		image.data[cell+3]=a;}
	var value,color;
	for (var x = 0; x < canvas.width; x++){
		for (var y = 0; y < canvas.height; y++) {
			value = pixels[x][y];
			color = get_color((value > -thickness && value < thickness));
			setColor((x + y * canvas.width) * 4 ,color.r,color.g,color.b,255);}}
	canvasContext.clearRect(0,0,canvas.width,canvas.height);
	canvasContext.putImageData(image,0,0);}