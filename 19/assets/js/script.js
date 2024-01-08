function guessNumberGame() {
    let min = 0;
    let max = 100;
    let isGuessed = false;
    alert("Загадайте число від 0 до 100, а я його вгадаю!");
    while (!isGuessed) {
      const guess = Math.floor((min + max) / 2);
      const userResponse = prompt(`Ваше число більше (>), менше (<) або дорівнює (=) ${guess}? Введіть один з символів.`);
      if (userResponse === ">" || userResponse === "<" || userResponse === "=") {
        if (userResponse === ">") {
          min = guess + 1;
        } else if (userResponse === "<") {
          max = guess - 1;
        } else {
          isGuessed = true;
          alert(`Вгадане число: ${guess}.`);
        }
      } else {
        alert("Будь ласка, введіть один з символів: '>', '<' або '='.");
      }
    }
  }

function thedate() {
    const inputDay = prompt('Enter day (числовий варіант)')
    const inputMonth = prompt('Enter month (числовиій варіант)')
    const inputYear = prompt('Enter year (числовий варіант)')
    if(inputDay >= 1 || inputMonth >= 1 || inputYear >= 1) {
        alert('')
    }
    //коротше, не знаю як це робити. Все.

}
  