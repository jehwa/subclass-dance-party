var makeBatmanDancer = function(top, left, timeBetweenSteps, className) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'batmanDancer');
  
  this.oldStep = this.step;

  this.left = true;
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();


    if (this.left) {
      this.$node.animate({
        top: '+=10%'
      });
    } else {
      this.$node.animate({
        top: '-=10%'
      });
    }
    this.left = !this.left;
  };
};

makeBatmanDancer.prototype = Object.create(makeDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;
makeBatmanDancer.prototype.lineUp = function() {
  this.setPosition(top, 500);
};