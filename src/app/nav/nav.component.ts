import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
    var x:any= document.getElementById("myTopnav");
    if(x.className==="topnav"){
      x.className+="responsive";

    }else{
      x.className="topnav";
    }


  }

}
