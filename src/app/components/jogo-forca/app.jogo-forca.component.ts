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
    {nome: 'A', selected: false, showDiv: true},
    {nome: 'B', selected: false, showDiv: true},
    {nome: 'C', selected: false, showDiv: true},
    {nome: 'D', selected: false, showDiv: true},
    {nome: 'E', selected: false, showDiv: true},
    {nome: 'F', selected: false, showDiv: true},
    {nome: 'G', selected: false, showDiv: true},
    {nome: 'H', selected: false, showDiv: true},
    {nome: 'I', selected: false, showDiv: true},
    {nome: 'J', selected: false, showDiv: true},
    {nome: 'K', selected: false, showDiv: true},
    {nome: 'L', selected: false, showDiv: true},
    {nome: 'M', selected: false, showDiv: true},
    {nome: 'N', selected: false, showDiv: true},
    {nome: 'O', selected: false, showDiv: true},
    {nome: 'P', selected: false, showDiv: true},
    {nome: 'Q', selected: false, showDiv: true},
    {nome: 'R', selected: false, showDiv: true},
    {nome: 'S', selected: false, showDiv: true},
    {nome: 'T', selected: false, showDiv: true},
    {nome: 'U', selected: false, showDiv: true},
    {nome: 'V', selected: false, showDiv: true},
    {nome: 'W', selected: false, showDiv: true},
    {nome: 'X', selected: false, showDiv: true},
    {nome: 'Y', selected: false, showDiv: true},
    {nome: 'Z', selected: false, showDiv: true},
  ];

  frutas: any = [ "UVA", "BANANA", "MANGA", "CAJA", "PINHA", 'FIGO', "ACEROLA", "CACAU", "CAQUI", "CARAMBOLA"];
  animais: any = ["ABELHA", "ANTA", "ARANHA", "COBRA", "ARARA", "BARATA", "BOI", "BORBOLETA", "BURRO", "CIGARRA",
  "CERVO", "CUPIM", "DINGO", "ELEFANTE"]
  cidades: any = ["BELO HORIZONTE", "LONDRES", "SALVADOR", "BRASILIA", "RIO DE JANEIRO"];
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
            this.arrayPalavraSorteada.push({letra: this.palavraSorteada[i], selected: this.palavraSorteada[i] == ' ' ? true: false});
        }
       this.showDiv = true;
       console.log(this.palavraSorteada)
    }

    else if(!this.showDivGanhador && option.jogo_forca == 'Fruta' ){
        tam = this.frutas.length - 1;
        i = this.getRandomInt(0, tam);
        this.palavraSorteada = this.frutas[i];
        for(let i = 0; i < this.palavraSorteada.length; i++){
          this.arrayPalavraSorteada.push({letra: this.palavraSorteada[i], selected: this.palavraSorteada[i] == ' ' ? true: false});
        }
        this.showDiv = true;
    }

    else if(!this.showDivGanhador && option.jogo_forca == 'Cidade'){
        tam = this.cidades.length - 1;
        i = this.getRandomInt(0, tam);
        this.palavraSorteada = this.cidades[i];
        for(let i = 0; i < this.palavraSorteada.length; i++){
          this.arrayPalavraSorteada.push({letra: this.palavraSorteada[i], selected: this.palavraSorteada[i] == ' ' ? true: false});
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
