import { Component } from '@angular/core';
import { Category } from 'src/models/category.model';
import { CategoryRepository } from 'src/repositories/category.repository';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  private repository: CategoryRepository;
  categoryList: Category[];

  constructor() {
    this.repository = new CategoryRepository();
    this.categoryList = this.repository.getCategoryList();
  }
}
