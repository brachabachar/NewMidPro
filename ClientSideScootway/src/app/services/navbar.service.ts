import { Injectable } from '@angular/core';
import { ItemNavbar } from '../class/item-navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  NavForPreview:ItemNavbar[]=[{link:'About',dir:0,nameButton:'אודות',onClick:"null"},{link:'',dir:1,nameButton:'כניסה',onClick:"login"},{link:'',dir:1,nameButton:'הרשמה',onClick:"Registration"}];
  NavForReg:ItemNavbar[]=[{link:'',dir:1,nameButton:'יציאה',onClick:"logout"},{link:'Way',dir:0,nameButton:'השכרה',onClick:""},{link:'',dir:0,nameButton:'השכרה עתידית',onClick:""},{link:' ',dir:0,nameButton:'הזמנות שלי',onClick:""},{link:'',dir:0,nameButton:'יצירת מסלול',onClick:""}];
  NavForManag:ItemNavbar[]=[{link:'',dir:1,nameButton:'יציאה',onClick:"logout"},{link:'NewScoot',dir:0,nameButton:'הוספת קורקינט',onClick:""},{link:'',dir:0,nameButton:'ניהול הזמנות',onClick:""}];


  
}
