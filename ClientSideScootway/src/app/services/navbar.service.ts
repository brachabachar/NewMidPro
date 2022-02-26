import { Injectable } from '@angular/core';
import { ItemNavbar } from '../class/base-class/item-navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  NavForPreview:ItemNavbar[]=[{Link:'About',Dir:0,NameButton:'אודות',OnClick:"null"},{Link:'',Dir:1,NameButton:'כניסה',OnClick:"login"},{Link:'',Dir:1,NameButton:'הרשמה',OnClick:"registration"}];
  NavForReg:ItemNavbar[]=[{Link:'Note',Dir:1,NameButton:'הערות',OnClick:""},{Link:'',Dir:1,NameButton:'יציאה',OnClick:"logout"},{Link:'Way',Dir:0,NameButton:'השכרה',OnClick:""},{Link:'Future-Order',Dir:0,NameButton:'הזמנה',OnClick:""},{Link:'',Dir:0,NameButton:'הזמנות שלי',OnClick:""}];
  NavForManag:ItemNavbar[]=[{Link:'Note',Dir:1,NameButton:'הערה',OnClick:""},{Link:'',Dir:1,NameButton:'יציאה',OnClick:"logout"},{Link:'NewScoot',Dir:0,NameButton:'קורקינט',OnClick:""},{Link:'storage',Dir:0,NameButton:'מחסן',OnClick:""},{Link:'order',Dir:0,NameButton:'ניהול הזמנות',OnClick:""}];
  
}
