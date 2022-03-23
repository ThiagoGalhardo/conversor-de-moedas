var usd = 0;
var eur = 0;
var gbp = 0;

var button = document.querySelector('#btn');
var box = document.querySelector('#box-result');
var error = document.querySelector('#error');
var real = document.querySelector('#real')

var resultDolar = document.querySelector('#dolar');
var resultEuro = document.querySelector('#euro');
var resultLibra = document.querySelector('#libra');

const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL'

document.addEventListener('DOMContentLoaded', () => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            usd = data.USDBRL.bid;
            eur = data.EURBRL.bid;
            gbp = data.GBPBRL.bid;
        })
})

button.addEventListener('click', convert);
real.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        convert();
    }
});


function convert() {
    real = document.querySelector('#real').value;

    if (real <= 0 || real == null) {
        box.style.display = 'none';
        error.style.display = 'block';
        error.style.animation = 'shake 0.78s';
    } else {
        showResult(real)
        box.style.display = 'block';
        error.style.display = 'none';
    }
}

function showResult(real) {
    resultDolar.innerHTML = `U$ ${(real / usd).toFixed(2)}`
    resultEuro.innerHTML = `€ ${(real / eur).toFixed(2)}`
    resultLibra.innerHTML = `£ ${(real / gbp).toFixed(2)}`
}