import './style.css';
// import Icon from './icon.png';

function component() {
  const element = document.createElement('div');

  element.textContent = 'Hello, Webpack!';
  element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  // const myIcon = document.createElement('img');

  return element;
}

document.body.appendChild(component());
