import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I Love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento():string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  // deletar(){
  //   this.service.criar(this.pensamento).subscribe()
  //   this.router.navigate(['/listarPensamento'])
  // }

}
