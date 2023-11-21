import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImpostoService } from 'src/app/services/imposto.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {

  private router : ActivatedRoute = inject(ActivatedRoute);
  private impostoService: ImpostoService = inject(ImpostoService);
  
  public nome : string = this.router.snapshot.params['nome'];
  aliquota : number = 0;
  valorProduto:number = 0;
  onCalcular(){
    const valorComImposto = this.impostoService.calcularICMS(this.valorProduto, this.aliquota);

    alert("O valor com imposto ficou: " + valorComImposto);
  }
}
