//ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  //drawArcs(green, red, maxR * 0.8);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  fill(black)
  arc(cx,cy,maxR,maxR,radians(0),radians(360));

  for(let i = 0; i < 10; i++){
    let x = i * 36;
    fill(green);
    arc(cx,cy,maxR * 0.8,maxR * 0.8,radians(x),radians(x+18));
    fill(cream);
    arc(cx,cy,maxR * 0.75,maxR * 0.75,radians(x),radians(x+18));
    fill(green);
    arc(cx,cy,maxR * 0.5,maxR * 0.5,radians(x),radians(x+18));
    fill(cream);
    arc(cx,cy,maxR * 0.45,maxR * 0.45,radians(x),radians(x+18));
  }
  for(let j = 0; j < 10; j++){
    let y = j * 36 + 18
    fill(red);
    arc(cx,cy,maxR * 0.8,maxR * 0.8,radians(y),radians(y+18));
    fill(black)
    arc(cx,cy,maxR * 0.75,maxR * 0.75,radians(y),radians(y+18));
    fill(red);
    arc(cx,cy,maxR * 0.5,maxR * 0.5,radians(y),radians(y+18));
    fill(black)
    arc(cx,cy,maxR * 0.45,maxR * 0.45,radians(y),radians(y+18));
  }
  //ふち
  line(cx,maxR * 0.1,cx,maxR * 0.9);
  line(cx-maxR*0.4,cy,cx+maxR*0.4,cy);



  fill(green);
  arc(cx,cy,maxR * 0.1,maxR * 0.1,radians(0),radians(360));
  fill(red);
  arc(cx,cy,maxR * 0.05,maxR * 0.05,radians(0),radians(360));

}

//function drawCircle(c, r){
  //fill();
  //ellipse(cx, cy, r, r);
//}
