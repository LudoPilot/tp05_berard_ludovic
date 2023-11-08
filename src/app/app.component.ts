import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Application TP3';
  productsAll: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const observer: Observer<any[]> = {
      next: (data: any[]) => {
        this.productsAll = data;
      },
      error: (error: any) => {
        console.error('Erreur lors de la recherche !', error);
      },
      complete: () => {
      }
    };

    this.productService.getProducts().subscribe(observer);
  }
}
