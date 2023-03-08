const form = document.querySelector('form');
const searchInput = document.querySelector('#searchInput');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  searchWikipedia(searchTerm);
});

async function searchWikipedia(searchTerm) {
  try {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchTerm}&origin=*`);
    const data = await response.json();
    displayResults(data.query.search);
  } catch (error) {
    console.log(error);
  }
}

function displayResults(results) {
  resultsDiv.innerHTML = '';
 
