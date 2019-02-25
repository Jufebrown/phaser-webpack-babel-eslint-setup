export default class TitleScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'Hello World', { font: '65px arial', fill: '#0f0' });
  }
}
