import 'phaser';
import 'TitleScene' from './scenes/TitleScene';
import './style.css';

const config = {
  type: Phaser.WEBGL,
  pixelArt: true,
  roundPixels: true,
  parent: 'content',
  width: 400,
  height: 240,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: {
              y: 800
          },
          debug: false
      }
  },
  scene: [
      TitleScene,
  ]
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
