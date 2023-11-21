import { Component } from '@angular/core';
import { Cliente } from 'src/models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //atributes
  nome : string = 'Oi';
  private sobrenome : string = 'aloo';
  isAtivo:boolean = true;

  public cliente : Cliente = {
    id:1,
    nome:'João',
    limiteCredito:100
  }

  clientes:Cliente[] = [
    {
      id:1,
      nome:'João',
      limiteCredito:100
    },
    {
      id:2,
      nome:'Maria',
      limiteCredito:100
    }
  ];
  //constructor
  constructor(){
    this.getForLoop();
  }

  //mettodos
  getSobrenome(): string {
    return this.sobrenome;
  }

  private getNome(): string{
    return this.nome;
  }

  getValorTotal():number{
    let valorTotal: number = 0;
      if(this.cliente.nome == 'João'){
        valorTotal=100;
      }else{
        valorTotal =200;
      }
    return valorTotal;
  }

  getForLoop(){
     for(let i = 0; i <= 10 ; i++){
      console.log(i);
     } 
  }

  getForEach(){
    let numeros : number[] = [1,2,3,4,5]

    numeros.forEach(numero =>{
      console.log(numero);
    });
  }
  aoClicar(){
    console.log("funfo");
  }
  onInputNomeChange(evento:any){
    console.log("kdkdkkkskskk");
    console.log(evento.target.value);
  }
  onInputKeyD(event:any){
    console.log("Down");
  }
  onInputKeyU(event:any){
    console.log("Up");
  }
  onEvento(evento : string){
    console.log("Consolo" + evento)
  }
}
