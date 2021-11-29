// 最終課題を制作しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  let x = 200
  fill(228,0,127);
  rect(200,50,x,x);
  fill(0,156,209);
  rect(130,180,x,x);
  fill(255,255,0)
  rect(260,140,x,x);
  fill(0,255,0);
  rect(260,250,70,90);
  fill(255,0,0);
  rect(260,140,140,110);
  fill(100);
  rect(260,180,70,70);
  fill(102,0,204);
  rect(200,180,60,70);
}

function mouseDragged(){
  fill(random(255));
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(10, 40), vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
