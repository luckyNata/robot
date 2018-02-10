import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TwoComponent implements OnInit {
  added: string = '';
  user: IUser = {
    name: '',
    pass: ''
  };
  constructor() { }

  ngOnInit() {
  }
  addNameOfUser(){
    this.added = 'Hello, '+ this.user.name;
  }

}

interface IUser {
  name: string;
  pass: string;
}
