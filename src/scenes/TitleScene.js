export default class TitleScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'Hello World', { font: '65px arial', fill: '#b50015' });

    this.add.text(100, 150, 'Start Game', { font: '14px arial' });
  }
}
