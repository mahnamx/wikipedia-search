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
const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json&origin=*&api_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlYzhhOTM0NjZiOTQyYjZhODZkYWRjMGI2NzVmZjg5MyIsImp0aSI6IjEyYTFkZWQ2MGMzNTQ4NTE4ZmNlOTYyMDQ3Y2Q5YzY5OTdhYTQxODM5MWM0ODIyMjUyYzc2ZjM3YTg4MDllNjAzNGViZGIwMWQ5YTNlNWI5IiwiaWF0IjoxNjc4MzEzNzI1LjIzNTY0NSwibmJmIjoxNjc4MzEzNzI1LjIzNTY0OSwiZXhwIjozMzIzNTIyMjUyNS4yMzM1MTMsInN1YiI6IjcyMjE1NzExIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.fFawOIQSwD2nMWR_1O4W-TwT0oOt9FkctkicL_VEulN-WguuE9twHA9Z7Lp2Yvda-L9rqvAwn5vh8Qsz0_NVmk-L5fjNVg9eBty3a4Ch7zqe0Tk8ynYLpSoxUxpE8UxnoU8LlGBweqTnYkDXFuhYv9anvloaSZ_fT1eNkv2Ztzcw7OqDI0yi_NJPl_1YA3_zoOZ1_zam_z4GTivD1G9eFhge1XMCzW6JnVxucBIRCMTpwVyUdWZ8K2XjUc8C6tYgggZXwmPvUsPljBbe6sNpSisEqzN1K5Qid50sjE8QXtlxb2BMgd3g9_F9D-JZG-Jmf7MCOCIkeTW854VJsjcEBN0p3K0gS48m2TW0psxLY2t3mwaKx-39M56yzBqu1oB7WCVEl2KSxkAOE8Em17EMzmVQ5SX3MkvV4I7e9H0Tc1pBucRnThxAupZltAlGcqM9H7O0SQ9eBzA6JGRJax-1aqr9oB-EI_P6GivC_-RXM-4Or54Pc6JnAXa89gC6PdGep_d63H-mOoin5Y9tvU-ECUNaA6I9BeGNbsNySqi5i5vBs7xkOBwADVTD_Z2lwV72eEipjy1gL2AWlLrupC0sS5bedONSXvzq-Wpgf7VXBBTf2zjImU8WzsCMSU6iUgV1a_WAE4X3ypzzMVGAOsoV7fvW1aGYcXKEAqMV3H_H9j0`;
    const data = await response.json();
    displayResults(data.query.search);
  } catch (error) {
    console.log(error);
  }
}

function displayResults(results) {
  resultsDiv.innerHTML = '';
 
