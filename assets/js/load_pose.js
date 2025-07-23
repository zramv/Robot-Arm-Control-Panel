function loadPose(data) {
  motors[0].value = data.motor1;
  motors[1].value = data.motor2;
  motors[2].value = data.motor3;
  motors[3].value = data.motor4;
  motors[4].value = data.motor5;
  motors[5].value = data.motor6;
  showValue();
}
