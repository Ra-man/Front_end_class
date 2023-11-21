import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/models/cliente';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  private service: ClienteService = inject(ClienteService);
  public clientes: Cliente[] = [];
  @ViewChild("formulario")formulario :NgForm|undefined;

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.service.get().subscribe(
      (response : any) => {
        this.clientes = response;
      },
      (error : any) => {
        alert("erro")
      }
    );
  }

  public save(formulario: NgForm){
      if (!formulario){
        alert("dados invalidos");
        return;
      }
      
      this.service.save(formulario.value, formulario.value.id).subscribe(
        (response)=>{
          alert("Cliente cadastrado");
          formulario.reset();
          this.get();
        },
        (error)=>{
          alert("Erro")
        }
      );
    }
  
    delete(id:number){
      this.service.delete(id).subscribe(
        (response)=>{
          alert("Cliente excluído com sucesso.");
          this.get();
        },
        (error)=>{
          alert("Erro ao exluir cliente. " + error);
        }
      );
    }

    public setEditar(cliente:Cliente){
      // this.formulario?.setValue(cliente);
      this.service.find(cliente.id).subscribe(
        (response:Cliente)=>{
          this.formulario?.setValue(response);
        },
        (error)=>{
          alert ("erro ao buscar cliente!");
        }
      )
    }


}
