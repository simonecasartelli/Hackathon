var myBg, mic, volume, myFont;
var colorList = ['#ea4139', 
                 '#456fe5',
                 '#ccbf4a',
                 '#cc4abd'];

function preload() {
  myBg = loadImage('./assets/bg.png');
}

var snowflakes = []

function setup() {
    // canvas
	createCanvas(windowWidth, windowHeight);
   
	// microphone
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	// volume
	var volume = mic.getLevel();
    volume = map(volume,0,1,0,2)
    
    // background
    push();
    translate(0,0);
    background('#484d5b');
     
    // image bg center
    push();
    translate(width/2,height/2-100);
    
    imageMode(CENTER)
    image(myBg,0,100,600,600);
    
    pop();

	push();
    
    // volume
	translate(width/2, height/2);

	var minSize = 20;
	var maxSize = width/3;
	var size = map(volume, 0, 1, minSize, maxSize);

	// bocce di natale
    var index = floor(random() * colorList.length);
    var colorHex = colorList[index];
    
    fill(color(colorHex));
    noStroke();
    ellipse(-50, 20, size);
    ellipse(80, 80, size);
    ellipse(-50, -100, size);
    ellipse(30, -130, size);
    ellipse(-80, 100, size);
    ellipse(150, 150, size);
    ellipse(70, 20, size);
    ellipse(-20, 180, size);
    ellipse(-150, 150, size);
    ellipse(-10, -50, size);
    ellipse(40, 130, size);
    ellipse(-20, -160, size);
	
    // text
    textFont('Mountains of Christmas');
    fill('white');
    textSize(width/10);
    textAlign(CENTER)
    text('Merry Christmas',0,0);
    
    pop();
    
    // var fiocchi
    var fiocchiMax = maxSize/10
    var fiocchiMin = minSize/10
    
    // fiocchi di neve
    if(true){
    var amount = map(volume,0,1,fiocchiMin,fiocchiMax);
    for(i=1; i <= amount; i++) {
      var obj = {
        x: random(0,1),
        y: random(0,-height/10),
        size: random(1, amount+2)
      }
      snowflakes.push(obj);
    }
  }
  
   for(var i=0; i< snowflakes.length; i++) {
    var fallingSpeed = 0.5;
    snowflakes[i].y += fallingSpeed + snowflakes[i].y*0.006;
    fill(235,235,188)
    noStroke();
    fill(255);
    ellipse(snowflakes[i].x*width, snowflakes[i].y, snowflakes[i].size);
  }
      
}
    
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}