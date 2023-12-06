import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ApiService } from './api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Application TP3';
	productsAll: any[] = [];
	isLoggedIn = false;
	loginForm = { login: '', password: '' };

	constructor(
		private productService: ProductService,
		private apiService: ApiService
	) { }

	ngOnInit(): void {
		// Vérifie si l'utilisateur est déjà connecté
		this.checkAuthentication();
	}

	// Fonction de soumission du formulaire de connexion
	login(): void {
		const { login, password } = this.loginForm;

		// Appelez votre service d'authentification pour vous connecter
		this.apiService.loginClient(login, password).subscribe(
			(client) => {
				// Connexion réussie
				this.isLoggedIn = true;
				// Chargez les produits après la connexion
				this.loadProducts();
			},
			(error) => {
				// Gérez les erreurs d'authentification ici
				console.error('Erreur lors de la connexion :', error);
				// Réinitialisez le formulaire
				this.loginForm = { login: '', password: '' };
			}
		);
	}

	// Vérifie si l'utilisateur est déjà authentifié
	private checkAuthentication(): void {
		// Vous pouvez implémenter votre propre logique ici
		// par exemple, vérifier si un jeton JWT est présent dans le stockage local
		// ou utiliser une autre méthode d'authentification de votre backend
	}

	// Chargez les produits une fois que l'utilisateur est authentifié
	private loadProducts(): void {
		this.productService.getProducts().subscribe(
			(data: any[]) => {
				this.productsAll = data;
			},
			(error) => {
				console.error('Erreur lors du chargement des produits :', error);
			}
		);
	}
}






// import { Component, OnInit } from '@angular/core';
// import { ProductService } from './product.service';
// import { Observer, Observable } from 'rxjs';
// import { ApiService } from './api.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'Application TP3';
//   productsAll: any[] = [];

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     const observer: Observer<any[]> = {
//       next: (data: any[]) => {
//         this.productsAll = data;
//       },
//       error: (error: any) => {
//         console.error('Erreur lors de la recherche !', error);
//       },
//       complete: () => {
//       }
//     };

//     this.productService.getProducts().subscribe(observer);
//   }
// }
