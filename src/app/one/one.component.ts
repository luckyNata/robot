import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MainService} from "../main.service";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OneComponent implements OnInit {
  data: any;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.data = this.mainService.getCodes();
  }

}
