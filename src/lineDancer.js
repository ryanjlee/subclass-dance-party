var LineDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("lineDancer");
  this.counter = 0;
  this.minLeft = left;
  this.maxLeft = left;
};


LineDancer.prototype = Object.create(Dancer.prototype);
LineDancer.prototype.constructor = LineDancer;

LineDancer.prototype.oldStep = Dancer.prototype.step;
LineDancer.prototype.step = function(){
  this.oldStep();

  this.counter++;
  //every fifth beat, recruit nearby dancers
  if(this.counter % 5=== 0) {
    for (var i = 0; i < window.dancers.length; i++) {
      var recruitLeft = dancers[i].left;
      var heightEligible = false;
      var leftEligible = false;
      var distance = 150;
      if(this.minLeft - distance < recruitLeft && recruitLeft < this.maxLeft + distance) {
        leftEligible = true;
      }
      if(this.top - distance < dancers[i].top && dancers[i].top < this.top + distance) {
        heightEligible = true;
      }


      //if the dancer is nearby:
      if(heightEligible && leftEligible && !dancers[i].alreadyRecruited) {

        //avoid recruiting them again, which does funky things
        dancers[i].alreadyRecruited = true;

        //add them to the line (same height)
        dancers[i].top = this.top;

        //synchronize their steps
        dancers[i].timeBetweenSteps = this.timeBetweenSteps;
        window.clearTimeout(dancers[i].setTimeoutTimer);
        dancers[i].step();

        //expand the size of the line for recruiting next time
        if (recruitLeft > this.maxLeft) {
          this.maxLeft = recruitLeft;
        } else if (recruitLeft < this.minLeft) {
          this.minLeft = recruitLeft;
        }
      }
    }
  }
};
