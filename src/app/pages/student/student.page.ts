import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  fname='';
  lname="";
  fullname="";
  emaill = "";
  clickemail = "";

  constructor() { }

  ngOnInit() {
  }

  onfname(){
    this.fname = (<HTMLInputElement>event.target).value;
    this.lname = (<HTMLInputElement>event.target).value;
    this.emaill = (<HTMLInputElement>event.target).value;
  }


  onClick(){
    this.fullname = this.fname + ' ' + this.lname;
    this.clickemail = this.emaill;
  }

}
