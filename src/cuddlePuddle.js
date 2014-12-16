var CuddlePuddle = function(top, left, timeBetweenSteps){
  timeBetweenSteps = timeBetweenSteps*3 + 500
  Dancer.call(this, top, left, timeBetweenSteps);
  this.nearest5 = [];
  this.nearest5Height;
  this.nearest5Left;
  totalCuddlers+=1;
  //figure out which collection of cuddlers this one belongs to
  this.cuddleNum = Math.floor(totalCuddlers/8);
  if(CuddlePuddle.prototype.puddles[this.cuddleNum] === undefined) {
    CuddlePuddle.prototype.puddles[this.cuddleNum] = [];
  }
  //push this cuddler into it's array of cuddlers
  CuddlePuddle.prototype.puddles[this.cuddleNum].push(this);
  this.$node.addClass("cuddlePuddle");

};

CuddlePuddle.prototype = Object.create(Dancer.prototype);
CuddlePuddle.prototype.constructor = CuddlePuddle;
CuddlePuddle.prototype.puddles = [];

CuddlePuddle.prototype.oldStep = Dancer.prototype.step;
CuddlePuddle.prototype.step = function(){
  //need to set the beat to be coordinated with the rest of the group;
  //check for group inclusion before doing anything!
  // make them move really slowly
  this.oldStep();
  var cuddleMembers = CuddlePuddle.prototype.puddles[this.cuddleNum];
  var midTop;
  var midLeft;
  var midTime;
  debugger;
  for(var i = 0; i < cuddleMembers.length; i++) {
    midTop += cuddleMembers[i].top;
    midLeft += cuddleMembers[i].left;
    midTime += this.timeBetweenSteps;
  }
  midTop = midTop / 8;
  midLeft = midLeft / 8;
  midTime = midTime / 8;

  //slowly synchronize their heart beats as they get closer
  //find the total distance from them to the center of the cuddle puddle
  //since we're moving by 10px each time, divide that total distance by 10 to get the number of steps before we're there
  //make the steps really long so this is an exaggerated process
  //change the timeBetweenSteps by the number of steps before we're there
  // when we are there, reset the heart beats like we did for the line dancers
  var topDistance = midTop - this.top;
  var leftDistance = midLeft = this.left;
  var totalDistance = Math.sqrt(topDistance * topDistance + leftDistance * leftDistance);
  var totalSteps = totalDistance/10;

  //as it's written now, it might be asymptotic.
  //see if we should be moving by an absolute 10 px, rather than a relative topDistance/10
  if(topDistance > 10) {
    this.top += topDistance/10;
  }
  if(leftDistance > 10) {
    this.left += leftDistance/10;
  }

  if(totalDistance < 10) {
    this.timeBetweenSteps = midTime;
    window.clearTimeout(this.setTimeoutTimer);
    this.step();
  }
  this.timeBetweenSteps += midTime/10;

  this.$node.toggle();

};
