import { Component, inject, signal } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categoryList = signal<any[]>([]);
  categoryServices = inject(CategoryService);

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryServices.getAllCategories().subscribe((data) => {
      const category = data || [];
      this.categoryList.set(category);
    });
  }
}
