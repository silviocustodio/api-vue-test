import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://api.themoviedb.org/3/movie/top_rated?api_key=4a203abe54a397a3160c4eb42e275f70&language=en-US&page=1'
})

export default {

    list:() => {
        return http.get('')
    }
}