import { Component, OnInit } from '@angular/core';
import { ItemNavbar } from 'src/app/class/item-navbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
   all:ItemNavbar[]=[{link:'#',class:1,nameButton:'כניסה',isFirst:true},{link:'#',class:1,nameButton:'הרשמה',isFirst:false}];
   right:ItemNavbar[];
   left:ItemNavbar[];
   isStart:boolean=true;
   test:string="Way";
  ngOnInit(): void {
  }

}
