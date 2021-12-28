// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i + j) % 2 == 0){
        fill(255);
      }
      else{
        fill(140)
      }
      rect(size * i, size * j, size, size);
    }
  }
  for(let k = 0; k < 4; k++){
    let x = k * 50 + 37.5
    fill(255,0,0)
    arc(x,12.5,20,20,radians(0),radians(360))
    arc(x,62.5,20,20,radians(0),radians(360))
    fill(0)
    arc(x,162.5,20,20,radians(0),radians(360))
  for(let l = 0; l < 4; l++){
    let y = l * 50 + 12.5
    fill(255,0,0)
    arc(y,37.5,20,20,radians(0),radians(360))
    fill(0)
    arc(y,137.5,20,20,radians(0),radians(360))
    arc(y,187.5,20,20,radians(0),radians(360))
  }
  }
}
