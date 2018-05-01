describe('triangleDancer', function() {

  var triangleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    triangleDancer = new makeTriangleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(triangleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(triangleDancer.$node, 'toggle');
    triangleDancer.step();
    expect(triangleDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(triangleDancer, 'step');
      expect(triangleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(triangleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(triangleDancer.step.callCount).to.be.equal(2);
    });
  });
});