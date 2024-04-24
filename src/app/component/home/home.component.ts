import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/model/receita'; // Importa o modelo de nóticia
import { Router } from '@angular/router'; // Importa o modulo de rotas
import { ReceitaService } from 'src/app/service/receita.service';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayDeReceitas: Receita[] = []
  arrayDeCategorias:Categoria[] =[]

  constructor( 
    private router: Router,
    private apiReceita: ReceitaService
  ){}

  
  ngOnInit(): void {
    this.chamaTodasReceitas()
    this.chamaTodasCategorias()
  }
  
  chamaTodasReceitas(): void{
    this.apiReceita.getAllReceitas().subscribe( (info) => {//ta selecionando as receitas em destaque
      //this.arrayDeReceitas = info
      for(let receita of info) {
        if(receita.destaque == true ) {
          this.arrayDeReceitas.push(receita)
        }

      }
    })
  }
chamaTodasCategorias():void{
  this.apiReceita.getAllCategorias().subscribe((info)=>{
    this.arrayDeCategorias = info

  } )


}
}