import { Category } from "src/models/category.model";

export class CategoryRepository {
  private categoryList: Category[];

  constructor() {
    this.categoryList = [
      {
        id: 1,
        name: "Macera",
      },
      {
        id: 2,
        name: "Romantik",
      },
      {
        id: 3,
        name: "Bilim Kurgu",
      },
      {
        id: 4,
        name: "Komedi",
      }
    ];
  }

  getCategoryList(): Category[] {
    return this.categoryList;
  }
}
