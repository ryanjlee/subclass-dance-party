$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    if(dancerMakerFunction === 'CuddlePuddle') {
      window.totalCuddlers +=1;
    }
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * (1000 - 100) + 100
    );
    $('body').append(dancer.$node);
  });

  $(".lineUp").on("click", function(event) {
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].left = 10;
      dancers[i].setPosition(dancers[i].top, 10);
    }
  });

  //first iteration: when moused over, the hulk will grow huge and wipe out all other dancers on the screen
  //second iteration: just knock out the closest dancer

  $("body").on("mouseenter", ".Hulk", function(event) {
    $(this).addClass("angryHulk");
    for(var i = 0; i < window.dancers.length; i++) {
      dancers[i].$node.remove();
    }
  });

  window.totalCuddlers = 0;


});

