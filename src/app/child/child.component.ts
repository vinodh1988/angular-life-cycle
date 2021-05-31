import { Component, OnInit,Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges{
@Input() num:number=0;
  constructor() {
      console.log("Child Created",this.num)
   } //run only once

  ngOnInit(): void {
     console.log("on init",this.num)
  } //run only once

  ngOnChanges(){
    console.log("on changes child",this.num)
  }



  childchange(){
    this.num=Math.round(Math.random()*100);
  }

  
  ngAfterContentInit(){
    console.log("Child Content Init Method");
  }

  ngAfterViewInit(){
    console.log("Child View Init method");
  }
}
