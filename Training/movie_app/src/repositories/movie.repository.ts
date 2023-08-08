import { Movie } from "src/models/movie.model";


export class MovieRepository {
  private movieList: Movie[];

  constructor() {
    this.movieList = [
      {
        id: 1,
        title: "Film 1",
        description: "Film 1 açıklama", imageUrl: "/assets/img/1.jpeg",
      },
      {
        id: 2,
        title: "Film 2",
        description: "Film 2 açıklama", imageUrl: "/assets/img/2.jpeg"
      },
      {
        id: 3,
        title: "Film 3",
        description: "Film 3 açıklama", imageUrl: "/assets/img/3.jpeg"
      },
      {
        id: 4,
        title: "Film 4",
        description: "Film 4 açıklama", imageUrl: "/assets/img/4.jpeg"
      },
      {
        id: 5,
        title: "Film 5",
        description: "Film 5 açıklama", imageUrl: "/assets/img/5.jpeg"
      },
    ]
  }

  getMovieList(): Movie[] {
    return this.movieList;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movieList.find(i => i.id == id);
  }
}