let angle = 0;
let orbitSpeed = 0.025;
let orbitRadius = 120;
let isPaused = false;

function setup() {
  createCanvas(650, 450);
}

function draw() {
  background(10, 18, 35);

  noStroke();
  for (let i = 0; i< 65; i++){
    let starX = (i * 137) % width;
    let starY = (i * 71) % height;
    fill(255, 180 + sin(frameCount * 0.04 + i) * 75);
      circle(starX, starY, 2);
  }
  
  let centerX = width / 2;
  let centerY = height / 2;

  noFill();
  stroke(100, 130, 170);
  strokeWeight(1.5);
  circle(centerX, centerY, orbitRadius * 2);

  let planetX = centerX + cos(angle) * orbitRadius;
  let planetY = centerY + sin(angle) * orbitRadius;

  noStroke();
  fill(255, 190, 55, 35);
  circle(centerX, centerY, 110);
  fill(255, 190, 55);
  circle(centerX, centerY, 65);
  fill(255, 255, 130);
  circle(centerX - 10, centerY - 10, 18);

  fill(75, 170, 255);
  circle(planetX, planetY, 27);
  fill(190, 230, 255);
  circle(planetX - 5, planetY - 5, 8);

  fill(255);
  textAlign(LEFT);
  textSize(14);
  text("SOLAR ORBIT ANIMATION", 15, 25);
  text("Angle: " + nf(angle, 1, 2), 15, 48);
  text("Speed: " + orbitSpeed, 15, 68);
  text("Radius: " + orbitRadius, 15, 88);

  textAlign(CENTER);
  textSize(14);
  text(
    "SPACE: Pause | UP/DPWN: Speed | LEFT/RIGHT: Radius",
    width / 2,
    height - 15
  );

  if (!isPaused) {
    angle += orbitSpeed;

    if (angle >= TWO_PI){
      angle -= TWO_PI;
    }
  }

  if (isPaused){
    textAlign(CENTER);
    textSize(22);
    fill(255);
    text("PAUSED", width / 2, 120);
  }
}

function keyPressed() {

  if (key === " ") {
    isPaused = !isPaused;
  }

  if (keyCode === UP_ARROW) {
    OrbitSpeed = min(0.12, orbitSpeed + 0.005);
  }

  if (keyCode === DOWN_ARROW) {
    OrbitSpeed = max(0.005, orbitSpeed - 0.005);
  }

  if (keyCode === RIGHT_ARROW) {
    OrbitRadius = mmin(170, orbitRadius + 10);
  }

  if (keyCode === LEFT_ARROW) {
    OrbitRadius = max(60, orbitRadius - 10);
  }

  return false;
}