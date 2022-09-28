class Game {
  constructor() {}

  getState() {
    var gamestateRef = database.ref("gameState");
    gamestateRef.on("value", (data) => {
      mygameState = data.val();
    });
  }

  updateState(statenumber) {
    database.ref("/").update({
      gameState: statenumber,
    });
  }

  start() {
    myForm = new Form();
    myForm.display();

    myPlayer = new Player();
    myPlayer.getCount();

    car1 = createSprite(width / 2 - 100, height - 100);
    car1.addImage("car1", car1Image);
    car1.scale = 0.07;
    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2Image);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    myForm.title.position(40, 60);
    myForm.title.class("resetTitle");
  }

  play() {
    myForm.hide();
    
    this.handleElements();
    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(trackImage, 0, -height * 5, width, height * 6);

      var index = 0;
      for (var i in allPlayers) {
        index = index + 1;
        var x = allPlayers[i].positionX;
        var y = height - allPlayers[i].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === myPlayer.index) {
          stroke(10);
          strokeWeight("black");
          fill("red");
          ellipse(x, y, 70, 70);
        }
      }
    }
    drawSprites()
  }

  end() {}
}
