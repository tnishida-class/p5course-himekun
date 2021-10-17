// 練習問題：神戸市のマーク
function setup(){
  createCanvas(600, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(153, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  arc(100, 100, 100, 100, radians(225), radians(45));

  fill(color(14, 47, 146))
  strokeWeight(0);
  arc(400, 100, 100, 100, radians(0), radians(360));
  fill(255)
  arc(393, 93, 97, 97, radians(0), radians(360));
  fill(color(22, 131, 46))
  arc(395, 95, 80, 80, radians(0), radians(360));
  fill(255)
  arc(394, 99, 74, 74, radians(0), radians(360));

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
