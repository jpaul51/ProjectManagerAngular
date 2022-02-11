import { transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { serverApi } from '../../environments/environment'
import { Translation } from '../model/translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationServiceService {
  translationsPath: string = "v1/application?entity=Translation";

  constructor(private http: HttpClient) { }


  fetchTranslations() {

    let token = localStorage.getItem("token")

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token
      })
    }

    this.http.get(serverApi + this.translationsPath, httpOptions).pipe(map(translationData => <Translation[]>translationData))
      .subscribe(data => localStorage.setItem("translations", JSON.stringify(data)),
        error => {
          console.log("Translations error");

        });
  }

  translateKey(key: string) : string  {

    let translationsString = localStorage.getItem("translations");
    let translations = <Translation[]>JSON.parse(translationsString);

    let translatedItem = translations.find(t => t.key.value == key);

    return translatedItem == null ? key : translatedItem.englishValue;

  }

}
