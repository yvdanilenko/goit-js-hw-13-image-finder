import '../css/styles.css';

import imgTmpl from '../tamplates/img-card.hbs';

import NewsApiService from './apiService.js';

const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchImg().then(appendImgMarkup);
}

function onLoadMore() {
  newsApiService.fetchImg().then(appendImgMarkup);
}

function appendImgMarkup(img) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', imgTmpl(img));
}

function clearImgContainer() {}
