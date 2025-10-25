import Phaser from "./phaser.js";

class Game extends Phaser.Scene {
  constructor() {
    super({key: "g1"});
  }
  preload() {
      this.load.setBaseURL("http://localhost:8888");
      
      
  }

  create() {
      console.log("created game1");

      this.rectangle = this.add.graphics();
      this.rectangle.fillStyle(0x0000FF, 1); // Blue color with full opacity
      this.rectangle.fillRect(100, 0, 200, 50); // X, Y, width, height
      
      // Define position to move the rectangle
      this.rectanglePositionY = 0;

      setTimeout(() => {
        this.scene.start("g2");
      }, 5000);

  }

  update() {
    console.log("trychecking the update");
  
    this.rectanglePositionY += 0.3; // Change this value to adjust speed
    if (this.rectanglePositionY > this.cameras.main.height) {
        this.rectanglePositionY = 0; // Reset to top once it moves off screen
    }

    // Clear the graphics and redraw the rectangle at the new position
    this.rectangle.clear();
    this.rectangle.fillStyle(0x0000FF, 1);
    this.rectangle.fillRect(100, this.rectanglePositionY, 200, 50);
  
  }
}

class Game2 extends Phaser.Scene {
  constructor() {
    super({key: "g2"});
  }
  preload() {
      this.load.setBaseURL("http://localhost:8888");
      
      
  }

  create() {
      console.log("created game1");

      this.rectangle = this.add.graphics();
      this.rectangle.fillStyle(0x00FF00, 1); // Blue color with full opacity
      this.rectangle.fillRect(100, 0, 200, 50); // X, Y, width, height
      
      // Define position to move the rectangle
      this.rectanglePositionY = 0;

      setTimeout(() => {
        this.scene.start("g1");
      }, 3000);

  }

  update() {
    console.log("trychecking the update");
  
    this.rectanglePositionY += 0.3; // Change this value to adjust speed
    if (this.rectanglePositionY > this.cameras.main.height) {
        this.rectanglePositionY = 0; // Reset to top once it moves off screen
    }

    // Clear the graphics and redraw the rectangle at the new position
    this.rectangle.clear();
    this.rectangle.fillStyle(0x00FF00, 1);
    this.rectangle.fillRect(100, this.rectanglePositionY, 200, 50);
  
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,  
  height: 450,
  scene: [Game, Game2],
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  }
};

const game = new Phaser.Game(config);
/// standard landscape game:
/// 16:9
/// 4:3 for retro style
/// 2:1 for the smartphone,, 

// window.addEventListener('resize', () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   game.scale.resize(width, height);
//   game.scene.getScene('MyGame').resize(width, height);
// });