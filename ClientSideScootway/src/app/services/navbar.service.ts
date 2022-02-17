import { Injectable } from '@angular/core';
import { ItemNavbar } from '../class/base-class/item-navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  NavForPreview:ItemNavbar[]=[{Link:'About',Dir:0,NameButton:'אודות',OnClick:"null"},{Link:'',Dir:1,NameButton:'כניסה',OnClick:"login"},{Link:'',Dir:1,NameButton:'הרשמה',OnClick:"Registration"}];
  NavForReg:ItemNavbar[]=[{Link:'',Dir:1,NameButton:'יציאה',OnClick:"logout"},{Link:'Way',Dir:0,NameButton:'השכרה',OnClick:""},{Link:'',Dir:0,NameButton:'השכרה עתידית',OnClick:""},{Link:' ',Dir:0,NameButton:'הזמנות שלי',OnClick:""},{Link:'',Dir:0,NameButton:'יצירת מסלול',OnClick:""}];
  NavForManag:ItemNavbar[]=[{Link:'',Dir:1,NameButton:'יציאה',OnClick:"logout"},{Link:'NewScoot',Dir:0,NameButton:'הוספת קורקינט',OnClick:""},{Link:'',Dir:0,NameButton:'ניהול הזמנות',OnClick:""}];


  
}
