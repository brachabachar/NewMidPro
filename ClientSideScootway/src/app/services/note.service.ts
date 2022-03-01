import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../class/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url:string = "/api/Note/";
  note:Note= new Note();
  constructor(private http: HttpClient) { }
  
  AddNote(n:Note){
    return this.http.post(this.url+"AddNote",n);
  }
  GetNotesById(noteId:number){
    return this.http.get(this.url+"GetNotesById?"+"noteId="+noteId);

  }
  GetNotesByScooterId(scooterId:number){
    return this.http.get(this.url+"GetScooterId?"+"scooterId="+scooterId)
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
    return this.http.get(this.url+"GetScooterId?"+"futureOrderId="+futureOrderId);

  }
  GetNotesNoRead(userId:number){
    return this.http.get(this.url+"GetNotesNoRead?"+"userId="+userId);
  }
  UpdateStatusNote(noteId:number,state:number){
    return this.http.get(this.url+"GetScooterId"+"noteId"+noteId+"&state"+state).subscribe(x=>{});

  }
} 
