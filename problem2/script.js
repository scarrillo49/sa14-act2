const currencyForm = document.getElementById('currency-form');
const conversionResult = document.getElementById('conversion-result');

const API_KEY = 'b438453eac32a65a64fec59b';

currencyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apiKey=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = exchangeRate * amount;
        conversionResult.innerHTML = `
            <p>Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}</p>
            <p>Exchange rate: 1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}</p>
        `;
    })
    .catch(error => {
        console.error(error);
        conversionResult.innerHTML = `<p>Error fetching exchange rate</p>`;
    });
});
