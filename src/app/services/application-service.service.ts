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

  private appConfigListPath = "applicationDescriptor"

  constructor(private http: HttpClient) { }

  apps: Application[]

  login() {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }


    var url = serverApi + "loginRemote";
    console.log(url)
    this.http.post(url, loginData, httpOptions).subscribe(next => {

      var response: token = next;
      this.token = response.value;

    });
  }

  appConfigList(): Application[] {

    console.log("get app list")
    if (this.apps == null || this.apps.length == 0) {
      console.log("token: " + this.token)
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          token: this.token
        })
      }
      this.http.get(serverApi + this.appConfigListPath, httpOptions).pipe(map(data => <Application[]>data)).subscribe(data => this.apps = data);
    }

    return this.apps
  }

}

class token {
  value?: string
}
