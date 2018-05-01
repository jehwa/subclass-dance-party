var makeJokerDancer = function(top, left, timeBetweenSteps, className) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'jokerDancer');
  
  this.oldStep = this.step;

  this.move = true;
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();


    if (this.move) {
      this.$node.animate({
        top: '+=10%'
      });
    } else {
      this.$node.animate({
        top: '-=10%'
      });
    }
    this.move = !this.move;
  };
};

makeJokerDancer.prototype = Object.create(makeDancer.prototype);
makeJokerDancer.prototype.constructor = makeJokerDancer;
makeJokerDancer.prototype.lineUp = function() {
  this.setPosition(top, 500);
};