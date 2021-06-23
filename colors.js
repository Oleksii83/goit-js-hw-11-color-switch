const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
// 1. Найти кнопки

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startBtnClick);
refs.stopBtn.addEventListener('click', stopBtnClick);

function startBtnClick() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  intervalId = setInterval(randomInterval, 1000);
}

function stopBtnClick() {
  refs.startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
}

function randomInterval() {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = randomColor;
}

//разобрать  2й способ

// const randomColor = randomIntegerFromInterval(0, colors.length -1);

// function randomInterval() {
//   refs.startBtn.addEventListener('click', () => {
//     document.body.style.backgroundColor = colors[randomColor];
//   };);
