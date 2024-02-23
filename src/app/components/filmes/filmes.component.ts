import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ApiService } from '../../services/api/api.service';
import { Filme } from '../../models/filme';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule, 
    CommonModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent implements OnInit {

  dataSource: MatTableDataSource<Filme> = new MatTableDataSource();
  // urlToJson = '/assets/films.json'
  displayedColumns: string[] = ['titulo', 'diretor', 'produtor', 'data_de_lancamento', 'texto_de_abertura'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private http : HttpClient, private api: ApiService){

    this.paginator = {} as MatPaginator;
    this.sort = {} as MatSort;
  }


  ngOnInit(): void {

//  <-- Solução sem a API, Somente lendo o arquivo -->
    // this.http.get<any>(this.urlToJson).subscribe(data => {
    //   this.dataSource.data = data.results;
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })

//  <-- Solução com a API -->
    this.api.listarFilmes().subscribe(dados => {
      this.dataSource.data = dados.results
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(dados.results);
    })

  }

    
  
  
}
  




  

