import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Certifique-se de que o HttpClient está importado
import { HttpClientModule } from '@angular/common/http';  // O HttpClientModule deve ser importado no standalone component

@Component({
  selector: 'teste-root',
  standalone: true,
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
  imports: [HttpClientModule]  // Adicione o HttpClientModule aqui
})
export class TesteComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      data => {
        console.log('Dados recebidos:', data);
      },
      error => {
        console.error('Erro:', error);
      }
    );
  }
}