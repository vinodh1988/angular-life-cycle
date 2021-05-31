import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked,AfterViewChecked{
  title = 'lifecycle';
  sno:number[]=[10,100,110,210];

  sendChild(){
    this.sno=[Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]
  }

  ngAfterContentChecked(){
    console.log("Parents Content Checked Method");
  }

  ngAfterViewChecked(){
    console.log("Parents View Checked method");
  }
}
