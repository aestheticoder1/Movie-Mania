import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDNkODcyZTNkNjliMjFiNmU0ODdlNDcxODc1ODc4OSIsIm5iZiI6MTcyMjI1NDUzNi4yMzIwNTYsInN1YiI6IjY2YTc0ZDc2OTVjNGU0NDc0OTQxNDM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ub5Pe5VwMaF3YzddEsFS30pgHXzYkzjI1ErW5EfVI0M'
      }
});

export default instance;