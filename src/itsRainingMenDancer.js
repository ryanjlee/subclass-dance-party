var ItsRainingMenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("itsRainingMenDancer");
};


ItsRainingMenDancer.prototype = Object.create(Dancer.prototype);
ItsRainingMenDancer.prototype.constructor = ItsRainingMenDancer;

ItsRainingMenDancer.prototype.oldStep = Dancer.prototype.step;
ItsRainingMenDancer.prototype.step = function(){
  this.oldStep();
  this.top += 20;
  this.setPosition(this.top, this.left);
  // setTimeout(function() {
  //   this.top -= 20;
  //   this.setPosition(this.top, this.left);
  // }, 100);
};
