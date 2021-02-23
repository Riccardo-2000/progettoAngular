import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recupero';
  data = [];
  constructor(private http: HttpClient,private store: Store) {
    this.http.get('http://http://localhost/phpmyadmin/server_databases.php?server=1').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
   
    
    }, error => console.error(error));
  }

  

}
