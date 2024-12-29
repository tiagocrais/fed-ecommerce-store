import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent {
  emailOrCpf: string = '';
  novaSenha: string = '';
  erro: string = '';
  erroNotificacao: string = '';
  sucesso: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  recuperarSenha(): void {
    const apiUrl = '/api/store/dados/cliente/altera-senha';
    const headers = new HttpHeaders({
      'cpfCnpjOrEmail': this.emailOrCpf,
      'novaSenha': this.novaSenha,
      'Content-Type': 'application/json'
    });

    this.http.put(apiUrl, {}, { headers, responseType: 'text' }).subscribe(
      (response: string) => {
        if (response === 'Senha atual já cadastrada. Por favor insira uma nova') {
          this.erro = response;
          this.sucesso = '';
        } else {
          this.sucesso = 'Senha alterada com sucesso!';
          this.erro = '';
        }
      },
      (error) => {
        this.sucesso = '';
        if (error.error.text) {
          this.erro = error.error.text;
        } else {
          this.erro = error.error;
        }
      }
    );
  }
}
