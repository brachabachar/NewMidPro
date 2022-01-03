import { Injectable } from '@angular/core';
import { ItemNavbar } from '../class/item-navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  NavForPreview:ItemNavbar[]=[{link:'About',dir:0,nameButton:'אודות',onClick:"null"},{link:'',dir:1,nameButton:'כניסה',onClick:"login"},{link:'',dir:1,nameButton:'הרשמה',onClick:"Registration"}];
  NavForReg:ItemNavbar[]=[{link:'',dir:1,nameButton:'יציאה',onClick:"logout"},{link:' NewRoute',dir:0,nameButton:'יציאה למסלול',onClick:""},{link:'',dir:0,nameButton:'הזמנה עתידית',onClick:""},{link:' ',dir:0,nameButton:'הודעות',onClick:""},{link:'',dir:0,nameButton:'מסלולים',onClick:""}];
  NavForManag:ItemNavbar[]=[{link:'',dir:0,nameButton:'יציאה',onClick:"logout"},{link:'NewScoot',dir:1,nameButton:'הוספת קורקינט',onClick:""}];


  
}
