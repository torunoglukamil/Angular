import { Category } from "src/models/category.model";

export class CategoryRepository {
  private categoryList: Category[];

  constructor() {
    this.categoryList = [
      {
        id: 1,
        name: "macera",
      },
      {
        id: 2,
        name: "romantik",
      },
      {
        id: 3,
        name: "bilim Kurgu",
      },
      {
        id: 4,
        name: "komedi",
      }
    ];
  }

  getCategoryList(): Category[] {
    return this.categoryList;
  }
}
