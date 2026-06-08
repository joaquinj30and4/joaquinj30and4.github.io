$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 620, 50, 20); 
    createPlatform(0, 500, 70, 20); 
    createPlatform(350, 450, 90, 20);
    createPlatform(0, 700, 100, 20)
    createPlatform(450, 550, 75, 20)
    createPlatform(650, 450, 75, 20)
    createPlatform(750, 550, 75, 20)
    createPlatform(875, 450, 75, 20)
    createPlatform(1050, 350, 100, 20)
    createPlatform(1250, 250, 75, 20)
    createPlatform(1300, 600, 100, 20)
    createPlatform(1100, 250, 20, 20)
    createPlatform(1000, 250, 20, 20)
    createPlatform(900, 250, 20, 20)
    createPlatform(800, 250, 20, 20)
    createPlatform(600, 250, 100, 20)
    // TODO 3 - Create Collectables
    createCollectable("steve", 1330, 550);
    createCollectable("diamond", 625, 170, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("left", 320, 750, 30);
    createCannon("left", 300, 750, 30);
    createCannon("left", 280, 750, 30);
    createCannon("left", 260, 750, 30);
    createCannon("right", 800, 0.000000000000001, 30);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
