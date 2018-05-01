var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.step(1000);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = this.step;

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // Dancer.prototype.step.call(this.$node.toggle(), 1000)

    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;