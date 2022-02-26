import { List } from '../../../class/base-class/list';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit  {
  isLoading: boolean=false;
@Input() list:List;
@Output() objectCheck:EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(()=>{this.isLoading=true;},3000)
    
  }
  
  LiClick(id:number){
    this.objectCheck.emit(id);
  }
}
