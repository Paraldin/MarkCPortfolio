let fizzer = document.querySelector('#fizzer');
let buzzer = document.querySelector('#buzzer');

function buzzIt(fizz, buzz) {
    buzzTron.innerHTML = "";

    if (fizz == "" && buzz == "") {
        buzzTron.innerHTML = '';
    } else {
        let fizzBuzzResult = ``;
        for (let i = 1; i < 103; i++) {
            if (!(i % fizz) && !(i % buzz)) {
               fizzBuzzResult = fizzBuzzResult + `<div class="bg-success col-md-2 col-xs-6 fizzbuzz">FizzBuzz</div>`;
            } else if (i % fizz == 0) {
               fizzBuzzResult = fizzBuzzResult + `<div class="bg-info col-md-2 col-xs-6 fizz">Fizz</div>`;
            } else if (i % buzz == 0) {
               fizzBuzzResult = fizzBuzzResult + `<div class="bg-warning col-md-2 col-xs-6 buzz">Buzz</div>`;
            } else {
               fizzBuzzResult = fizzBuzzResult + `<div class="col-md-2 col-xs-6">${i}</div>`;
            }
        }
        buzzTron.innerHTML = fizzBuzzResult
    }
}