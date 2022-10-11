import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { StorageHelper } from 'src/app/lib/helpers/storage.helper';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(private apiService: ApiService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.apiService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        let session = {
          username: this.username,
          token: response.token
        }
        StorageHelper.setItem("session", response)
        this.router.navigate(['search'])
      }
    })
  }

}
