import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverApi, loginData } from '../../environments/environment'
import { Application } from '../views/model/application';
import { map, timeout } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { TranslationServiceService } from './translation-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  token: any;

  private apiVersion = "v1";

  private appConfigListPath = this.apiVersion + "/applicationDescriptor"
  private appGetPagePath = this.apiVersion + "/applicationPage"
  private appGetOnePath = this.apiVersion + "/application/"

  constructor(private http: HttpClient, private translationService: TranslationServiceService) { }

  apps: BehaviorSubject<Application[]> = new BehaviorSubject([])

  login(callback?: Function) {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }


    var url = serverApi + "loginRemote";
    console.log("LOGIN: "+url)
    return this.http.post(url, loginData, httpOptions).subscribe(data => {

      localStorage.setItem('user', data["user"]);
      localStorage.setItem('token', data["value"]);
      this.login = data["user"];
      this.token = data["token"];
      if (callback != null) {
        callback.call(this);
      }


    });


  }

  appConfigList() {

    const httpOptions = this.getHeaders();

    this.http.get(serverApi + this.appConfigListPath, httpOptions).pipe(timeout(2000), map(data => <Application[]>data))
      .subscribe(data => {
        this.apps.next(data);
      },
        error => {
          console.log("Error status: " + error.status)
          // if(error.status == 404 || error.status == 302){
          this.login(this.appConfigList);
          // }

        });

    this.translationService.fetchTranslations();
  }


  private getHeaders() {
    let token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token
      })
    };
    return httpOptions;
  }

  getPage(descriptor, filter = "", pageIndex = 0, pageSize = 10) {
    const httpOptions = this.getHeaders();
    return this.http.get(serverApi + this.appGetPagePath + "?descriptor=" + descriptor + "&pageIndex="
      + pageIndex + "&pageSize=" + pageSize + "&filter=" + filter, httpOptions)
      .pipe(timeout(2000))
      .toPromise();

  }

  getOne(entity, id) {
    const httpOptions = this.getHeaders();
    return this.http.post(serverApi + this.appGetOnePath + entity + "/" + id+"/open","", httpOptions)
      .pipe(timeout(2000))
      .toPromise();
  }

}
