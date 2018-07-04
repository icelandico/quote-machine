const api = new XMLHttpRequest();
const quoteApi = "https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json";
let getQuote = document.querySelector('.quote');
let tweet = document.querySelector('.tweet');
let quoteIn = document.querySelector('.get-text');
let quoteAuthor = document.querySelector('.author');


function parse() {
    quoteIn.classList.remove('animate');
    quoteAuthor.classList.remove('animate');
    api.open('GET', quoteApi, true);
    api.onload = function () {
        data = JSON.parse(this.response);
        insertData(data);
    };
    api.send();
}

function insertData(data) {
    let randomQuote = Math.floor(Math.random()* data.length + 1);
    quoteIn.classList.add('animate');
    quoteAuthor.classList.add('animate');
    quoteIn.innerHTML = "\"" + data[randomQuote].quoteText + "\"";
    quoteAuthor.innerHTML = data[randomQuote].quoteAuthor;
}

function tweetQuote() {
    window.open("https://twitter.com/intent/tweet?text= " +  quoteIn.innerText + ' by ' + quoteAuthor.innerText,
    target="_blank", 'location=yes, status=yes, resizable=yes,top=500,left=500,width=400,height=400');
    }

getQuote.addEventListener('click', parse);
tweet.addEventListener('click', tweetQuote);













