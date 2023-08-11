import { Movie } from "src/models/movie.model";

export class MovieRepository {
  private movieList: Movie[];

  constructor() {
    this.movieList = [
      {
        id: 1,
        categoryId: 4,
        title: "film 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste",
        imageUrl: "/assets/img/1.jpeg",
        isPopular: false,
        publishDate: new Date(),
      },
      {
        id: 2,
        categoryId: 3,
        title: "film 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste",
        imageUrl: "/assets/img/2.jpeg",
        isPopular: false,
        publishDate: new Date(),
      },
      {
        id: 3,
        categoryId: 2,
        title: "film 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste",
        imageUrl: "/assets/img/3.jpeg",
        isPopular: false,
        publishDate: new Date(),
      },
      {
        id: 4,
        categoryId: 1,
        title: "film 4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste",
        imageUrl: "/assets/img/4.jpeg",
        isPopular: true,
        publishDate: new Date(),
      },
      {
        id: 5,
        categoryId: 4,
        title: "film 5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste",
        imageUrl: "/assets/img/5.jpeg",
        isPopular: true,
        publishDate: new Date(),
      },
    ]
  }

  getMovieList(): Movie[] {
    return this.movieList;
  }

  getPopularMovieList(): Movie[] {
    return this.movieList.filter(x => x.isPopular);
  }

  getMovieById(id: number): Movie | undefined {
    return this.movieList.find(x => x.id == id);
  }
}