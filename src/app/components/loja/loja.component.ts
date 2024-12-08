import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {

  produtos = [
    { id: 1, nome: 'Produto 1', preco: 99.99, imagem: 'https://via.placeholder.com/150' },
    { id: 2, nome: 'Produto 2', preco: 149.99, imagem: 'https://via.placeholder.com/150' },
    { id: 3, nome: 'Produto 3', preco: 199.99, imagem: 'https://via.placeholder.com/150' },
  ];

}
