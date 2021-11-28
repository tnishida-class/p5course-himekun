// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 3; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  x += vx;
  y += vy;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);

  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(" ".charCodeAt(0))){ y-= 25; }

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = 0 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
