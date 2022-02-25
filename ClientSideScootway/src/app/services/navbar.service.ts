import { Injectable } from '@angular/core';
import { ItemNavbar } from '../class/base-class/item-navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor() { }
  NavForPreview:ItemNavbar[]=[{Link:'About',Dir:0,NameButton:'אודות',OnClick:"null"},{Link:'',Dir:1,NameButton:'כניסה',OnClick:"login"},{Link:'',Dir:1,NameButton:'הרשמה',OnClick:"Registration"}];
  NavForReg:ItemNavbar[]=[{Link:'About',Dir:0,NameButton:'אודות',OnClick:"null"},{Link:'/Note/GetNotesByUserIdCreat',Dir:1,NameButton:'הודעות שלי',OnClick:"null"},{Link:'/Note/GetNotesByUserIdFromManager',Dir:1,NameButton:'הודעות מהמנהל',OnClick:"null"},{Link:'',Dir:1,NameButton:'פרופיל',OnClick:""},{Link:'About',Dir:1,NameButton:'יציאה',OnClick:"logout"},{Link:'/Scooter/GetScooterInStreet',Dir:0,NameButton:'תפיסה קורקינט',OnClick:"null"},{Link:'FuturRent',Dir:0,NameButton:'הזמנה',OnClick:"null"},{Link:'/Order/AllOrders',Dir:0,NameButton:'הזמנות שלי',OnClick:"null"}];
  NavForManag:ItemNavbar[]=[{Link:'About',Dir:0,NameButton:'אודות',OnClick:"null"},{Link:'',Dir:1,NameButton:'הערה',OnClick:""},{Link:'About',Dir:1,NameButton:'יציאה',OnClick:"logout"},{Link:'/Scooter/AllScooter',Dir:0,NameButton:'קורקינט',OnClick:""},{Link:'',Dir:0,NameButton:'מחסן',OnClick:""},{Link:'/Order/AllOrders',Dir:0,NameButton:'ניהול הזמנות',OnClick:"null"}];
  
}
