var Hulk = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("Hulk");
  this.large = false;
  this.$node.addClass("smallHulk");

};

Hulk.prototype = Object.create(Dancer.prototype);
Hulk.prototype.constructor = Hulk;

Hulk.prototype.oldStep = Dancer.prototype.step;

Hulk.prototype.step = function() {
  // this.oldStep();
  //we need to adjust the size of it based on this.size in our css
  //we can create two new classes, largeHulk and smallHulk
  //and then selectively add or remove those classes from this hulk node
  //
  // if(this.large) {
  //   this.$node.removeClass("largeHulk");
  //   this.$node.addClass("smallHulk");
  //   this.large = false;
  // } else {
  //   this.$node.removeClass("smallHulk");
  //   this.$node.addClass("largeHulk");
  //   this.large = true;
  // }


};
