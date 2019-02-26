export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'TitleScene',
    });
  }

  create() {
    this.add.text(100, 100, 'Hello World', { font: '65px arial', fill: '#b50015' });

    const startGameButton = this.add.text(100, 200, 'Start Game', { font: '14px arial', fill: '#fff' })
      .setInteractive()
      .on('pointerdown', () => this.startGame())
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState());
  }

  startGame() {
    this.scene.start('GameScene');
  }

  enterButtonHoverState() {
    this.startGameButton.setStyle({ fill: '#b50015' });
  }

  enterButtonRestState() {
    this.startGameButton.setStyle({ fill: '#fff' });
  }
}
