import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  @Input() products: any[] = []; // Récupération de la liste des produits
  searchTerm: string = ''; // terme de recherche pour le nom de produit
  categorySearchTerm: string = '';

  // Filtrage en fonction du terme de recherche
  filterProducts(): any[] {
    return this.products.filter(product =>
      this.filterByName(product) && this.filterByCategory(product)
    );
  }

  private filterByName(product: any): boolean {
    if (!this.searchTerm.trim()) {
      // si le terme de recherche est vide, on retourne true
      return true;
    }

    return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
  }

  private filterByCategory(product: any): boolean {
    if (!this.categorySearchTerm.trim()) {
      return true;
    }

    return product.category.toLowerCase().includes(this.categorySearchTerm.toLowerCase());
  }
}
