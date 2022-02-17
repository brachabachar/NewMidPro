import { List } from '../../../class/base-class/list';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() list:List;
@Output() objectCheck:EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  LiClick(id:number){
    this.objectCheck.emit(id);
  }
}
