export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'TitleScene',
    });
  }

  create() {
    this.add.text(100, 100, 'Hello World', { font: '65px arial', fill: '#b50015' });

    const startGameButton = this.add.text(100, 150, 'Start Game', { font: '14px arial', fill: '#fff' })
      .setInteractive()
      .on('pointerdown', () => this.startGame())
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState());
  }

  // startGame() {

  // }

  enterButtonHoverState() {
    this.startGameButton.setStyle({ fill: '#b50015' });
  }

  enterButtonRestState() {
    this.startGameButton.setStyle({ fill: '#fff' });
  }
}
