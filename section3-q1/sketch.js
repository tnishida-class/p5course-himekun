// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 50;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
 let size = count
 if(40 < count && count < 60){
   ellipse(width / 2, height/2, size*2);
   }
 else{
   ellipse(width / 2, height / 2, size);
 if(mouseIsPressed){
   count = (count + 5)
 }
 }
}
