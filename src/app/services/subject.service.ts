import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {}

  // getList(); Observable<any>{
  //   return this.http.get('https://6267b6cb786383364223baa5.mockapi.io/ebid/:endpoint\n');
  // }
}
