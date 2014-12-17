var CuddlePuddle = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = this.timeBetweenSteps;
  Dancer.call(this, top, left, timeBetweenSteps);
   this.$node.addClass("cuddlePuddle");
};

CuddlePuddle.prototype = Object.create(Dancer.prototype);
CuddlePuddle.prototype.constructor = CuddlePuddle;

// CuddlePuddle.prototype.oldStep = Dancer.prototype.step;
CuddlePuddle.prototype.step = function(){
  //need to set the beat to be coordinated with the rest of the group;
  // make them move really slowly
  Dancer.prototype.step.call(this);
  var cuddleMembers = [];
  for (var i = 0; i < window.dancers.length; i++) {
    if(window.dancers[i].constructor === CuddlePuddle) {
      cuddleMembers.push(window.dancers[i]);
    }
  }
  var midTop = 0;
  var midLeft = 0;
  var midTime = 0;

  for(var i = 0; i < cuddleMembers.length; i++) {
    midTop += cuddleMembers[i].top;
    midLeft += cuddleMembers[i].left;
    midTime += this.timeBetweenSteps;
  }
  midTop = midTop / cuddleMembers.length;
  midLeft = midLeft / cuddleMembers.length;
  midTime = midTime / cuddleMembers.length;

  //slowly synchronize their heart beats as they get closer
  //find the total distance from them to the center of the cuddle puddle
  //since we're moving by 10px each time, divide that total distance by 10 to get the number of steps before we're there
  //make the steps really long so this is an exaggerated process
  //change the timeBetweenSteps by the number of steps before we're there
  // when we are there, reset the heart beats like we did for the line dancers

  var topDistance = midTop - this.top;
  var leftDistance = midLeft - this.left;
  var totalDistance = Math.sqrt(topDistance * topDistance + leftDistance * leftDistance);
  var totalSteps = totalDistance/10;
  var timeDistance = midTime - this.timeBetweenSteps;

  //as it's written now, it might be asymptotic.
  //see if we should be moving by an absolute 10 px, rather than a relative topDistance/10
  if(Math.abs(topDistance) > 10) {
    this.top += topDistance/totalSteps;
  }
  if(Math.abs(leftDistance) > 10) {
    this.left += leftDistance/totalSteps;
  }

  this.setPosition(this.top, this.left);
  if(totalDistance < 10) {
    this.timeBetweenSteps = midTime;
    window.clearTimeout(this.setTimeoutTimer);
    CuddlePuddle.prototype.step.call(this);
  }
  this.timeBetweenSteps += timeDistance/10;

  //this.$node.toggle();

};
