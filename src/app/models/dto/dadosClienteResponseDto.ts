export class DadosClienteResponseDto {
    nome: string;
    cpfCnpj: string;
    email: string;
    telefone: string;
    dataNascimento: string;
    genero: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    id: number;

    constructor(
        nome: string,
        cpfCnpj: string,
        email: string,
        telefone: string,
        dataNascimento: string,
        genero: string,
        rua: string,
        numero: number,
        complemento: string,
        bairro: string,
        cidade: string,
        uf: string,
        cep: string,
        id: number
    ) {
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.cep = cep;
        this.id = id;
    }
}
