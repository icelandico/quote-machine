const api = new XMLHttpRequest();
var quoteApi = "https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json";
// var height = 550;
// var width = 300;
// var top = window.innerHeight-height;
// var left = window.innerHeight-width;
var getQuote = document.querySelector('.quote');
var tweet = document.querySelector('.tweet');
var quoteIn = document.querySelector('.get-text');
var quoteAuthor = document.querySelector('.author');


function parse() {
    quoteIn.classList.remove('animate');
    quoteAuthor.classList.remove('animate');
    api.open('GET', quoteApi, true);
    api.onload = function () {
        data = JSON.parse(this.response);
        console.log(data);
        insertData(data);
    };
    api.send();
}

function insertData(data) {
    var randomQuote = Math.floor(Math.random()* data.length + 1);
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













