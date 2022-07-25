require('./style.css');

const $button = document.querySelector('.submit');
const todos = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg');
const onClickButton = e => {
  e.preventDefault();
  if (!todoInput.value) {
    msg.style.display = 'block';
    setTimeout(() => (msg.style.display = 'none'), 1000);
    return;
  }
  const li = document.createElement('li'); // li태그를 생성하는 li변수 선언
  li.appendChild(document.createTextNode(todoInput.value)); // li 요소 안에 텍스트 추가(node객체로)
  li.classList.add('item'); // 생성한 li태그에 item 클래스를 부여하여 item 클래스에 부여한 css 스타일링 적용
  todos.appendChild(li); // 자식요소 추가
  todoInput.value = '';
  todoInput.focus();
};

$button.addEventListener('click', onClickButton);
