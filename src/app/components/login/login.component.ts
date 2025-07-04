import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DadosClienteResponseDto } from 'src/app/models/dto/dadosClienteResponseDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailOrCpf: string = '';
  senha: string = '';
  dadosCliente!: DadosClienteResponseDto;
  erro: string = '';
  erroEmailOuCpf: string = '';
  erroSenha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  validaLogin(): void {
    const apiUrl = '/api/store/dados/cliente/login';

    const headers = new HttpHeaders({
      'cpfCnpjOrEmail': this.emailOrCpf,
      'senha': this.senha
    });

    this.http.get<DadosClienteResponseDto>(apiUrl, { headers }).subscribe(
      (data: DadosClienteResponseDto) => {
        this.dadosCliente = data;
        this.router.navigate(['/loja']);
      },
      (error) => {
        if (error.error === 'Cpf/cnpj ou email não cadastrados') {
          this.erroEmailOuCpf = error.error;
          this.erroSenha = '';
        } else if (error.error === 'Senha incorreta') {
          this.erroSenha = error.error;
          this.erroEmailOuCpf = '';
        }
      }
    );
  }

  esqueceuSenha(): void {
    this.router.navigate(['/esqueci-senha']);
  }
  
}
