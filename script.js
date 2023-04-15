const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote-btn');
const loader = document.getElementById('loader');

//Show loading 
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

//Hide loading 
function completeLoading() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function newQuote () {
    //get quote, show loader
    loading();

    //pick a random quote from our database
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    quoteAuthor.textContent = quote.author;
    quoteText.textContent = quote.text;

    // add class long-quote to make the font smaller
    if (quote.text.length > 120) {
        quoteText.classList.add('long-qoute')
    } else {quoteText.classList.remove('long-quote')};

    //hide loader
    completeLoading();
}

 //tweet a quote 
 function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text= ${quoteText.textContent} - ${quoteAuthor.textContent}.`;
    window.open(twitterURL, '_blank');
}

//Event listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On load
newQuote();