var WhiteBoyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.rightOrLeft = true;
  this.$node = $('<span class = "whiteBoyDancer dancer"></span>')
};

WhiteBoyDancer.prototype = Object.create(Dancer.prototype);
WhiteBoyDancer.prototype.constructor = WhiteBoyDancer;

WhiteBoyDancer.prototype.oldStep = Dancer.prototype.step;

WhiteBoyDancer.prototype.step = function() {
  this.oldStep();
  if(this.rightOrLeft) {
    this.left += 25;
  } else {
    this.left -= 25;
  }
  this.rightOrLeft = !this.rightOrLeft;
  this.setPosition(this.top, this.left);
}
