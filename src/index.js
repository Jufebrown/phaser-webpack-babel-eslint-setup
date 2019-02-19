import 'phaser';
import 'TitleScene' from './scenes/TitleScene';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerText = 'hello';
  element.classList.add('test');

  return element;
}

document.body.appendChild(component());
