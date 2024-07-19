function setup(){
createCanvas(200,200);
}

function draw() {
  background(0);
  
  textFont('COURIER NEW');
  textSize(40);
  text('PACMAN',25,50);
  let x = frameCount/1;
  console.log(x);
  fill(0,0,255);
  
    if(x<100){
      console.log("EATING CIRCLE 1");
    circle(100,100,20);
    circle(125,100,20);
    circle(150,100,20);
    } 
  else if(x>=100 && x<125){
    console.log("EATING CIRCLE 2");
    circle(125,100,20);
    circle(150,100,20);
    }
    else if(x>=125 && x<150){
      console.log("EATING CIRCLE 3");
      circle(150,100,20);
    }
  
  fill(255, 255, 0);
  noStroke();
// circle(x, 100, 50);
  
   let biteSize = PI /12;
  let startAngle = biteSize * sin(frameCount * 0.3) + biteSize;
  let endAngle = TWO_PI - startAngle;

  arc(x,100,50,50, startAngle, endAngle, PIE);

}