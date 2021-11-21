import { Component, OnInit } from '@angular/core';
import { ItemNavbar } from 'src/app/class/item-navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lst:ItemNavbar[];
  constructor() { }

  ngOnInit(): void {
  }

}
