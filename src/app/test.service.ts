import { Injectable } from '@angular/core';
import  {Http,Response} from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from '../../node_modules/rxjs';
import {Data} from './data';
@Injectable()
export class TestService {

  constructor(private http:Http) { }

  getData() : Observable <Data[]> {
   
    return this.http.get('/assets/demo.json').pipe(map ((resp: Response)=>resp.json()));
  
  } 
}
