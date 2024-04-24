import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/service/receita.service';
import { Receita } from 'src/app/model/receita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receitasdet',
  templateUrl: './receitasdet.component.html',
  styleUrls: ['./receitasdet.component.scss']
})
export class receitasdetComponent implements OnInit {

  arrayDeReceitas: Receita[] = [];
  dificuldadeSelecionada: number = 0;

  constructor(
    private apiReceita: ReceitaService
  ) { }
}