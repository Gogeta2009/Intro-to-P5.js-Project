function preload() {

}
function setup() {
canvas = createCanvas(1000,1000);
canvas.position(300,300);
video = createCapture(VIDEO);
video.hide();
}
function draw() {    
fill('red');
circle(25,25,100);
fill('red');
circle(975,25,100);
fill('red');
circle(975,975,100);
fill('red');
circle(25,975,100);
fill('blue');
rect(30,15,925,50);
fill('blue');
rect(940,15,50,975);
fill('blue');
rect(30,940,925,50);
fill('blue');
rect(30,15,50,940);
image(video,250,250,500,500);

}
function take_snapshot() {
save("Akhil.png");
}
