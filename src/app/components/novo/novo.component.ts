import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent {
  @Input("teste") teste : string = 'Padrão';
  @Output("evento") evento: EventEmitter<string> = new EventEmitter(); 
  
  emitir(){
    this.evento.emit(" meu retorno");
  }
}
