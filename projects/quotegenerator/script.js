const api_url = "https://anime-chan.herokuapp.com/api/quotes";
const quoteRandom = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const getQuote = async (url) => {
    const response = await fetch(url);
    var quote = await response.json();
    quoteRandom.innerHTML = quote.quote;
    quoteAuthor.innerHTML = quote.character;
    
}

getQuote(api_url);

const newQ = document.getElementById('btn1');
newQ.addEventListener('click', () => {
    location.reload();
})