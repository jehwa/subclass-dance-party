$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    console.log(this);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  $('.lineUpButton').on('click', function(event) {
    console.log(window.dancers);
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });
  
  $('.interactButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    for (let i = 0; i < window.dancers.length; i ++) {
      for (let j = i + 1; j < window.dancers.length; j ++) {
        var distance = Math.sqrt(Math.pow((window.dancers[i].top - window.dancers[j].top), 2) + Math.pow((window.dancers[i].left - window.dancers[j].left), 2));
        if (distance <= 100) {
          window.dancers[i].$node.remove();
          window.dancers[j].$node.remove();
          window.dancers[i] = new makeJokerDancer(window.dancers[i].top, window.dancers[i].left, 1000, 'jokerDancer');
          $('body').append(window.dancers[i].$node);
          window.dancers[j] = new makeJokerDancer(window.dancers[j].top, window.dancers[j].left, 1000, 'jokerDancer');
          $('body').append(window.dancers[j].$node);
          
        }
      }
    }
  });
});

