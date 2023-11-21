import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  // nome : string = "";
@ViewChild("formulario") formulario : NgForm | undefined;

  // setNome(){
  //   this.nome = "Pega dessa";
  // }
  onFormSubmit(){
    console.log(this.formulario?.value);
    console.log(this.formulario?.valid);
    console.log(this.formulario?.untouched);
  }
}
