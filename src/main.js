import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery, showError, showSuccess } from './js/render-functions.js';
import 'css-loader';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let currentQuery = '';
let currentPage = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = form.elements.searchQuery.value.trim();

  if (!query) {
    showError('Please enter a search term.');
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery(gallery);
  loader.style.display = 'block';

  try {
    const data = await fetchImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again.');
    } else {
      renderGallery(data.hits, gallery);
      showSuccess(`Found ${data.totalHits} images.`);
    }
  } catch (error) {
    showError('Something went wrong. Please try again later.');
  } finally {
    loader.style.display = 'none';
  }
});
