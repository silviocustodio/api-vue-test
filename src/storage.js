let storage = {
  apiKey: '4a203abe54a397a3160c4eb42e275f70',
  sessionId: localStorage.getItem('session_id') || null,
  userId: localStorage.getItem('user_id') || null,
  pageTitlePostfix: ' — ' + document.title,
  listTypes: [
    {
      title: 'Pop Movies',
      shortTitle: 'Popular',
      query: 'popular',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Coming Soon',
      shortTitle: 'Upcoming',
      query: 'upcoming',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Current Movies',
      shortTitle: 'Now Playing',
      query: 'now_playing',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Top Rated Movies',
      shortTitle: 'Top Rated',
      query: 'top_rated',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Search',
      query: 'search',
      isCategory: false
    },
  ],
  categories: {},
  // For Browser History
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
  moviePopupOnHistory: false
};

// Create categories titles
storage.listTypes.forEach(function(listType){
  storage.categories[listType.query] = listType.title;
});

export default storage;
