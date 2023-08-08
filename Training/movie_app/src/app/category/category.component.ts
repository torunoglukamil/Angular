import { Component } from '@angular/core';
import { Category } from 'src/models/category.model';
import { CategoryRepository } from 'src/repositories/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  private repository: CategoryRepository;
  categoryList: Category[];

  constructor() {
    this.repository = new CategoryRepository();
    this.categoryList = this.repository.getCategoryList();
  }
}