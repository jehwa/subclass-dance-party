var makeBlinkyDancer = function(top, left, timeBetweenSteps, className) {

  makeDancer.call(this, top, left, timeBetweenSteps, 'dancer');
  this.move = true;
  this.oldStep = this.step;
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log(this.$node);
    // 
    if (this.move) {
      this.$node.animate({
        width: '300px',
        // border: '50px solid red',
        borderRadius: '50px',
      }, 100);
      
    } else {
      this.$node.animate({
        width: '50px',
        borderRadius: '10px',
      }, 100);
    }
    
    this.move = !this.move;
  };
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.lineUp = function() {
  this.setPosition($('body').height() * .70, this.left);
};