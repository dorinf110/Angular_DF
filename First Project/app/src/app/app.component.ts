import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstname:String="Tiberiu";
  lastname:String="Vlad";
  texth1:String="";

  value:String="";

  colorvalue:String="";
  fontColor:String="";
  
  
  OnClick(){
    this.firstname="Vasile";
    this.lastname="George";
    this.texth1="Am adaugat text;"
  }

  Click2(){
    this.value="Hello world!"
  }

  Click3(){
    this.fontColor=this.colorvalue;
  }
;}
