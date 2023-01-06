import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app.jogo-forca',
  templateUrl: './app.jogo-forca.component.html',
  styleUrls: ['./app.jogo-forca.component.scss']
})
export class AppJogoForcaComponent implements OnInit {
  form = new FormGroup({
    jogo_forca: new FormControl('', Validators.required)
  });

  postionXForca: any;
  postionYForca: any;
  selectedModalidade: any;

  alfabeto: any[] = [
    {nome: 'A', selected: false},
    {nome: 'B', selected: false},
    {nome: 'C', selected: false},
    {nome: 'D', selected: false},
    {nome: 'E', selected: false},
    {nome: 'F', selected: false},
    {nome: 'G', selected: false},
    {nome: 'H', selected: false},
    {nome: 'I', selected: false},
    {nome: 'J', selected: false},
    {nome: 'K', selected: false},
    {nome: 'L', selected: false},
    {nome: 'M', selected: false},
    {nome: 'N', selected: false},
    {nome: 'O', selected: false},
    {nome: 'P', selected: false},
    {nome: 'Q', selected: false},
    {nome: 'R', selected: false},
    {nome: 'S', selected: false},
    {nome: 'T', selected: false},
    {nome: 'U', selected: false},
    {nome: 'V', selected: false},
    {nome: 'W', selected: false},
    {nome: 'X', selected: false},
    {nome: 'Y', selected: false},
    {nome: 'Z', selected: false},
  ];

  frutas: any = [ "UVA", "BANANA", "MANGA", "CAJA", "PINHA", 'FIGO', "ACEROLA"];
  animais: any = ["ABELHA", "ANTA", "ARANHA", "COBRA", "ARARA", "BARATA", "BOI", "BORBOLETA", "BURRO", "CIGARRA",
  "CERVO", "CUPIM", "DINGO", "ELEFANTE"]
  cidades: any = ["MANAUS", "PERNAMBUCO", "SALVADOR", "BRASILIA"];
  palavraSorteada: string = '';
  arrayPalavraSorteada: any[] = [];
  showDiv: boolean = false;
  countImg: number = 0;
  jogadorPerdeu: boolean = false;
  jogadorVenceu: boolean = false;
  showDivGanhador: boolean = false;


  constructor() { }
  options: any = [
    {nome: 'Fruta'},
    {nome: 'Animal'},
    {nome: 'Cidade'},
    {nome: 'Selecione uma opção'},
  ]

  ngOnInit(): void {

  }


  submit(){
    let option: any = this.form.value;
    let tam: number;
    let i: number;
    this.arrayPalavraSorteada = [];

    if(!this.showDivGanhador && option.jogo_forca == 'Animal'){
        tam = this.animais.length - 1;
        i = this.getRandomInt(0, tam);
        this.palavraSorteada = this.animais[i];

        for(let i = 0; i < this.palavraSorteada.length; i++){
            this.arrayPalavraSorteada.push({letra: this.palavraSorteada[i], selected: false});
        }
       this.showDiv = true;
       console.log(this.palavraSorteada)
    }

    else if(!this.showDivGanhador && option.jogo_forca == 'Fruta' ){
        tam = this.frutas.length - 1;
        i = this.getRandomInt(0, tam);
        this.palavraSorteada = this.frutas[i];
        for(let i = 0; i < this.palavraSorteada.length; i++){
          this.arrayPalavraSorteada.push({letra: this.palavraSorteada[i], selected: false});
        }
        this.showDiv = true;
    }

    else if(!this.showDivGanhador && option.jogo_forca == 'Cidade'){
        tam = this.cidades.length - 1;
        i = this.getRandomInt(0, tam);
        this.palavraSorteada = this.cidades[i];
        for(let i = 0; i < this.palavraSorteada.length; i++){
          this.arrayPalavraSorteada.push({letra: this.palavraSorteada[i], selected: false});
        }
        this.showDiv = true;
    }

  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  selecionarLetra(letra: any){
      if(!this.showDivGanhador && this.arrayPalavraSorteada.length > 0){
        let temLetra: boolean = false;
        for(let i = 0; i < this.arrayPalavraSorteada.length; i++){
            if(this.arrayPalavraSorteada[i].letra == letra.nome){
              this.arrayPalavraSorteada[i].selected = true;
              temLetra = true;
            }
        }
        this.verficarVencedor();
        if(this.palavraSorteada ){
          if(this.countImg < 7 && !temLetra){
            this.countImg += 1;
            if(this.countImg == 7){
                this.jogadorPerdeu = true;
                this.showDivGanhador = true;
            }
          }
          letra.selected = true;
        }
      }

  }

  verficarVencedor(){
    let temLetra: number = this.arrayPalavraSorteada.length;
      for(let i = 0; i < this.arrayPalavraSorteada.length; i++){
          if(this.arrayPalavraSorteada[i].selected){
            temLetra--;
          }
      }

    if(temLetra == 0){
      this.jogadorVenceu = true;
      this.showDivGanhador = true;
    }
  }

  jogarNovamente(){

    this.arrayPalavraSorteada = [];
    this.palavraSorteada = '';
    this.countImg = 0;
    this.jogadorVenceu = false;
    this.showDivGanhador = false;
    this.jogadorPerdeu = false;
    this.alfabeto.forEach(x => x.selected = false);
  }
}
