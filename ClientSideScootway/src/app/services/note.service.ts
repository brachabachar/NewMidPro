import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../class/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url:string = "/api/Note/";
  note:Note= new Note();
  s:string='[{"Id":6,"Description":"תודה והמשך יום טוב","CreatedOn":"2022-02-22T00:00:00","StatusId":3,"ScooterId":null,"FutureOrderId":null,"OrderId":null,"UserId":null,"CreatedById":1},{"Id":8,"Description":"תודה והמשך יום טוב","CreatedOn":"2022-02-22T00:00:00","StatusId":3,"ScooterId":null,"FutureOrderId":null,"OrderId":null,"UserId":null,"CreatedById":3},{"Id":13,"Description":"בליעכעהיחליע","CreatedOn":"2022-02-26T22:16:28.947","StatusId":3,"ScooterId":null,"FutureOrderId":2,"OrderId":null,"UserId":null,"CreatedById":1},{"Id":14,"Description":"Zסבהנימצ","CreatedOn":"2022-02-26T23:32:08.343","StatusId":3,"ScooterId":null,"FutureOrderId":3,"OrderId":null,"UserId":null,"CreatedById":1}]';

  constructor(private http: HttpClient) { }
  
  AddNote(n:Note){
    return this.http.post(this.url+"AddNote",n);
  }
  GetNotesById(noteId:number,userId :number){
    return this.http.get(this.url+"GetNotesById?"+"noteId="+noteId +"&userId="+userId);

  }
  GetNotesByScooterId(scooterId:number){
    return this.http.get(this.url+"GetNotesByScooterId?"+"scooterId="+scooterId)
  }
  GetNotesByUserIdCreat(userId:number){
    return this.http.get(this.url+"GetNotesByUserIdCreat?"+"userId="+userId);
  }
  GetNotesByUserIdFromManager(userId:number){
    return this.http.get(this.url+"GetNotesByUserIdFromManager?"+"userId="+userId);
  }
  GetNotesByUserId(userId:number){
    return this.http.get(this.url+"GetScooterId?"+"userId="+userId);

  }
  GetNewNotesByUserId(userId:number){
    return this.http.get(this.url+"GetScooterId"+"userId"+userId).subscribe(x=>{});

  }
  GetNotesByOredrId(orderId:number){
    return this.http.get(this.url+"GetScooterId?"+"orderId="+orderId);
  }
  GetNotesByFutureOrderId(futureOrderId:number){
    return this.http.get(this.url+"GetNotesByFutureOrderId?"+"futureOrderId="+futureOrderId);

  }
  GetNotesNoRead(userId:number){
    return this.http.get(this.url+"GetNotesNoRead?"+"userId="+userId);
  }
  UpdateStatusNote(noteId:number,state:number){
    return this.http.get(this.url+"GetScooterId"+"noteId"+noteId+"&state"+state).subscribe(x=>{});

  }
} 
