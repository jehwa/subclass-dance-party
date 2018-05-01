var makeSquareDancer = function(top, left, timeBetweenSteps, className) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'squareDancer');
  
  this.oldStep = this.step;
  // this.$node = $('<span class="squareDancer"></span>');
  
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // Dancer.prototype.step.call(this.$node.toggle(), 1000)

    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log(this.$node);
    
    this.$node.animate({
      left: ['toggle', 'swing'],
      right: ['toggle', 'swing'],
    }, 100);
  };
};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

