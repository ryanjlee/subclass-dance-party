var CuddlePuddle = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

CuddlePuddle.prototype = Object.create(Dancer.prototype);
CuddlePuddle.prototype.constructor = CuddlePuddle;

CuddlePuddle.prototype.oldStep = Dancer.prototype.step;
CuddlePuddle.prototype.step = function(){
  this.oldStep();

  this.$node.toggle();
};
