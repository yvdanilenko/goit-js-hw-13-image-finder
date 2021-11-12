export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImg() {
    // console.log('this до запроса', this);
    const KEY = '24306837-744403f381005b0d2ef373f04';
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&page=${this.page}&image_type=photo&per_page=5`;

    return fetch(URL)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        // console.log('data из fetch in apiService', data);
        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searcQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
