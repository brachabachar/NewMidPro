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
    this.http.post(this.url+"AddNote",n).subscribe(x=>{});
  }
  GetNotesById(noteId:number){
    return this.http.get(this.url+"GetScooterId"+"noteId"+noteId);

  }
  GetNotesByScooterId(scooterId:number){
    return this.http.get(this.url+"GetScooterId"+"scooterId"+scooterId);

  }
  GetNotesByUserId(userId:number){
    return this.http.get(this.url+"GetScooterId"+"userId"+userId);

  }
  GetNewNotesByUserId(userId:number){
    return this.http.get(this.url+"GetScooterId"+"userId"+userId);

  }
  GetNotesByOredrId(orderId:number){
    return this.http.get(this.url+"GetScooterId"+"orderId"+orderId);

  }
  GetNotesByFutureOrderId(futureOrderId:number){
    return this.http.get(this.url+"GetScooterId"+"futureOrderId"+futureOrderId);

  }
  UpdateStatusNote(noteId:number,state:number){
    return this.http.get(this.url+"GetScooterId"+"noteId"+noteId+"&state"+state);

  }
}