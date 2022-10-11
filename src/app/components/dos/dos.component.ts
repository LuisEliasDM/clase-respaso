import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {
  public pokemon$!: Observable<any>;
  public search:string = "";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  changeSearch(){
    this.pokemon$ = this.apiService.searchPokemon(this.search)
  }
}
