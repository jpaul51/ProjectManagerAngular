import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverApi, loginData } from '../../environments/environment'
import { Application } from '../model/application';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  token: any;

  appConfigListPath = "applicationDescriptor"

  constructor(private http: HttpClient) { }

  apps: Application[]

  login() {

  

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }

   

    this.http.post(serverApi+"login", loginData, httpOptions).subscribe(next => {
      this.token = next;
      console.log("token");
    });
  }

  appConfigList() : Application[] {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.token
      })
    }
     this.http.get(serverApi + this.appConfigListPath, httpOptions).pipe(map(data => <Application[]>data)).subscribe(data => this.apps = data);

     return this.apps
  }

}
