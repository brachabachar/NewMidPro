import { User } from './../class/user';
import { Injectable, OnInit } from '@angular/core';
import { ItemNavbar } from '../class/base-class/item-navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  NavForPreview: ItemNavbar[];
  NavForReg: ItemNavbar[];
  NavForManag: ItemNavbar[];
  user: User;
  constructor() {
    this.SetData();
  }
  SetData() {
    if (localStorage.getItem("user") != null)
      this.user = JSON.parse(localStorage.getItem("user") ?? " ");
    this.NavForPreview = [
      { Title: '', Link: 'About', Dir: 0, NameButton: 'אודות', OnClick: "null" },
      { Title: '', Link: '', Dir: 1, NameButton: 'כניסה', OnClick: "login" },
      { Title: '', Link: '', Dir: 1, NameButton: 'הרשמה', OnClick: "Registration" }];

    this.NavForReg = [
      { Title: '', Link: 'About', Dir: 0, NameButton: 'אודות', OnClick: "null" },
      { Title: '', Link: '/Note/GetNotesByUserIdCreat', Dir: 1, NameButton: 'הודעות שלי', OnClick: "null" },
      { Title: '', Link: '/Note/GetNotesByUserIdFromManager', Dir: 1, NameButton: 'הודעות מהמנהל', OnClick: "null" },
      { Title: this.user?.FirstName + ' ' + this.user?.LastName, Link: '', Dir: 1, NameButton: 'פרופיל', OnClick: "" },
      { Title: '', Link: 'About', Dir: 1, NameButton: 'יציאה', OnClick: "logout" },
      { Title: '', Link: '/Scooter/GetScooterInStreet', Dir: 0, NameButton: 'תפיסה קורקינט', OnClick: "null" },
      { Title: '', Link: 'FuturRent', Dir: 0, NameButton: 'הזמנה', OnClick: "null" },
      { Title: '', Link: '/Order/AllOrders', Dir: 0, NameButton: 'הזמנות שלי', OnClick: "null" }];

    this.NavForManag = [
      { Title: '', Link: 'About', Dir: 0, NameButton: 'אודות', OnClick: "null" },
      { Title: '', Link: '', Dir: 1, NameButton: 'הערה', OnClick: "" },
      { Title: '', Link: 'About', Dir: 1, NameButton: 'יציאה', OnClick: "logout" },
      { Title: '', Link: '/Scooter/AllScooter', Dir: 0, NameButton: 'קורקינט', OnClick: "" },
      { Title: '', Link: '', Dir: 0, NameButton: 'מחסן', OnClick: "" },
      { Title: '', Link: '/Order/AllOrders', Dir: 0, NameButton: 'ניהול הזמנות', OnClick: "null" }];

  }
}
