import axios from 'axios';

export class RequestServer {
    static url = 'https://api.themoviedb.org/3/';
    static key = 'ce77ddb03ebd0577ea6b19d0dd53be3c'
    
    trendingDay() {
        return axios.get(`${RequestServer.url}trending/movie/day?api_key=${RequestServer.key}`);
    }
    trendingWeek() {
        return axios.get(`${RequestServer.url}trending/movie/week?api_key=${RequestServer.key}`);
    }
    newFilms() {
        return axios.get(`${RequestServer.url}movie/upcoming?api_key=${RequestServer.key}&language=en-US&page=1`);
    }
    searchMovies(value) {
        return axios.get(`${RequestServer.url}search/movie?api_key=${RequestServer.key}&language=en-US&query=${value}`);
    }
    movieDetails(movieId) {
        return axios.get(`${RequestServer.url}movie/${movieId}?api_key=${RequestServer.key}&language=en-US`);
    }
    movieVideos(movieId) {
        return axios.get(`${RequestServer.url}movie/${movieId}/videos?api_key=${RequestServer.key}&language=en-US`);
    }
    movieGenre() {
        return axios.get(`${RequestServer.url}genre/movie/list?api_key=${RequestServer.key}&language=en-US`);
    }
    movieCountries() {
        return axios.get(`${RequestServer.url}configuration/countries?api_key=${RequestServer.key}`);
    }
    movieTrailer(movieId) {
        return axios.get(`${RequestServer.url}movie/${movieId}/videos?api_key=${RequestServer.key}&language=en-US`);
    }
     movieImage(backdropPath) {
        return axios.get(`https://image.tmdb.org/t/p/original/${backdropPath}`);
    }
}