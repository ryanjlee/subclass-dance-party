describe("whiteBoyDancer", function() {

  var whiteBoyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    whiteBoyDancer = new WhiteBoyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(whiteBoyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that moves it's position", function() {
    sinon.spy(whiteBoyDancer, 'setPosition');
    whiteBoyDancer.step();
    expect(whiteBoyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(whiteBoyDancer, "step");
      expect(whiteBoyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(whiteBoyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(whiteBoyDancer.step.callCount).to.be.equal(2);
    });
  });
});
