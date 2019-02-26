export default class GameScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'GameScene', { font: '65px arial', fill: '#fff' });
  }
}
