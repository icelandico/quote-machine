const getQuote = document.querySelector('.quote');
const tweet = document.querySelector('.tweet');
const quoteText = document.querySelector('.get-text');
const quoteAuthor = document.querySelector('.author');

async function parse() {
  const quoteApi = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  quoteText.classList.remove('animate');
  quoteAuthor.classList.remove('animate');
  const parse = await fetch(quoteApi);
  const response = await parse.json();
  insertData(response)
}

function insertData(data) {
  let randomQuote = Math.floor(Math.random()* data.quotes.length + 1);
  const quoteTextData = data.quotes[randomQuote].quote
  const quoteAuthorData = data.quotes[randomQuote].author
  quoteText.classList.add('animate');
  quoteAuthor.classList.add('animate');
  quoteText.innerHTML = `"${quoteTextData}"`
  quoteAuthor.innerHTML = quoteAuthorData
}

function tweetQuote() {
  const windowHeight = window.innerHeight / 2;
  const windowWidth = window.innerWidth / 2;
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  window.open(`https://twitter.com/intent/tweet?text=${quote} by ${author}`,
  target="_blank", `location=yes, status=yes, resizable=yes,top=${windowHeight},left=${windowWidth},width=400,height=400`);
}

getQuote.addEventListener('click', parse);
tweet.addEventListener('click', tweetQuote);
