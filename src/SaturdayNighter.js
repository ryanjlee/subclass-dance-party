var SaturdayNighter = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("SaturdayNighter");
  this.target = SaturdayNighter.prototype.targets[Math.random()*2];
  this.atTarget = false;
  this.counter = 0;
};

SaturdayNighter.prototype = Object.create(Dancer.prototype);
SaturdayNighter.prototype.constructor = SaturdayNighter;
SaturdayNighter.prototype.targets = ['bar1', 'bar2', 'danceFloor'];
SaturdayNighter.prototype.bar1= {left: 50, top:500};
SaturdayNighter.prototype.bar2= {left: 500, top:900};
SaturdayNighter.prototype.danceFloor = {left: 1000, top:400};


SaturdayNighter.prototype.oldStep = Dancer.prototype.step;
SaturdayNighter.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if(this.atTarget === false) {
    var topDistance = SaturdayNighter.prototype[this.target][top] - this.top;
    var leftDistance = SaturdayNighter.prototype[this.target][left] - this.left;
    var totalDistance = Math.sqrt(topDistance * topDistance + leftDistance * leftDistance);
    var totalSteps = totalDistance/10;

    if(Math.abs(topDistance) > 40) {
      this.top += topDistance/totalSteps;
    }
    if(Math.abs(leftDistance) > 40) {
      this.left += leftDistance/totalSteps;
    }

    this.setPosition(this.top, this.left);

    if(totalDistance < 50) {
      this.atTarget = true;
    }
  } else {

  }

  //check if they're close to any of the boundaries
  // if they are, allow them to reevaluate their direction
  // if they get really close, force them to reverse direction
  // if it's their third movement, reevaluate their top direction
  // generate magnitudes for left and top movement
  // set the new position based on some logic
  //



}
