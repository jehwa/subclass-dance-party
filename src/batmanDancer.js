var makeBatmanDancer = function(top, left, timeBetweenSteps, className) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'batmanDancer');
  
  this.oldStep = this.step;

  this.move = true;
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();


    if (this.move) {
      this.$node.animate({
        left: '+=10%'
      });
    } else {
      this.$node.animate({
        left: '-=10%'
      });
    }
    this.move = !this.move;
  };
};

makeBatmanDancer.prototype = Object.create(makeDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;
makeBatmanDancer.prototype.lineUp = function() {
  this.setPosition($('body').height() * .70, this.left);
};