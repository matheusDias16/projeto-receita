import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/service/receita.service';
import { Receita } from 'src/app/model/receita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  arrayDeReceitas: Receita[] = [];
  dificuldadeSelecionada: number = 0;

  constructor(
    private apiReceita: ReceitaService
  ) { }

  ngOnInit(): void {
    this.pegaReceitas()
  }

  pegaReceitas(): void{
    this.apiReceita.getAllReceitas().subscribe( (receitas) => {
      this.arrayDeReceitas = receitas
    })
  }

  alteraDificuldade( dificuldadeNova: number ): void{
    this.dificuldadeSelecionada = dificuldadeNova
    console.log(this.dificuldadeSelecionada)
  }

}