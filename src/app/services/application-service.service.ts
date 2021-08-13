import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverApi, loginData } from '../../environments/environment'
import { Application } from '../views/model/application';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslationServiceService } from './translation-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  token: any;

  private appConfigListPath = "v1/applicationDescriptor"

  constructor(private http: HttpClient, private translationService : TranslationServiceService) { }

  apps: Subject<Application[]> = new Subject()

  currentRoute = new Subject();

  login(callback? : Function) {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }


    var url = serverApi + "loginRemote";
    console.log(url)

    return this.http.post(url, loginData, httpOptions).subscribe(data => {
      console.log("DATA");

      console.log(data);
      localStorage.setItem('user', data["user"]);
      localStorage.setItem('token', data["value"]);
      this.login = data["user"];
      this.token = data["token"];
      if(callback != null){
        callback.call(this);
      }
      

    });


  }




  appConfigList() {

    console.log("get app list")

    let token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token
      })
    }
    console.log(serverApi + this.appConfigListPath)
    this.http.get(serverApi + this.appConfigListPath, httpOptions).pipe(map(data => <Application[]>data))
      .subscribe(data => this.apps.next(data),
        error => {
          if(error.status == 404){
           this.login(this.appConfigList);
          }

        });

        this.translationService.fetchTranslations();
  }

}
