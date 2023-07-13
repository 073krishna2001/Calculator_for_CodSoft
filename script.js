let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      var expression = string;
      expression = expression.replace(/%/g, '/100');
      string = eval(expression);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === '00') {
      string += "00";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === 'Del') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }
    else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});