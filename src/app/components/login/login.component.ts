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
        console.log('Login bem-sucedido:', data);
        this.router.navigate(['/loja']);
      },
      (error) => {
        console.error('Erro ao fazer login:', error.status, error.statusText, error.error);
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
    // Redirecionar para a página de recuperação de senha
    this.router.navigate(['/esqueci-senha']);
  }
  
}
