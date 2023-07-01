
const requests = {


    fetchtrending : 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c9196db42dfa06b95ebd4cd1680a3d19',
    fetchHorrormovie:'https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=c9196db42dfa06b95ebd4cd1680a3d19',
    fetchToprated:'https://api.themoviedb.org/3/movie/top_rated?api_key=c9196db42dfa06b95ebd4cd1680a3d19',
    fetchActionmovie:'https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=c9196db42dfa06b95ebd4cd1680a3d19',
    fetchCommedymovie:'https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=c9196db42dfa06b95ebd4cd1680a3d19',
    fetchRomancemovie:'https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=c9196db42dfa06b95ebd4cd1680a3d19',
    fetchDocumentry:'https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=c9196db42dfa06b95ebd4cd1680a3d19',
};

export default requests;