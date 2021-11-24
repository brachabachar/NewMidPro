import { Injectable } from '@angular/core';
import { ItemNavbar } from '../class/item-navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  NavForPreview:ItemNavbar[]=[{link:'About',dir:0,nameButton:'אודות',onClick:"null"},{link:'#',dir:1,nameButton:'כניסה',onClick:"login"},{link:'#',dir:1,nameButton:'הרשמה',onClick:"Registration"}];
}
