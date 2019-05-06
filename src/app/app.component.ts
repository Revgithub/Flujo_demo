import { Component,OnInit } from '@angular/core';
import { TestService } from './test.service';
import {Data} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit 
 {
 public  data:Data[]=[];

  constructor( private testService:TestService) {
}
ngOnInit()
{
  this.testService.getData().subscribe(
    resp => {
      console.log(resp);
     this.data= resp;
     console.log(this.data);
      });
}
 }
