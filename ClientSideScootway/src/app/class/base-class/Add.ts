import { List } from 'src/app/class/base-class/list';
import { ValidatorFn} from '@angular/forms';
export class Add {
    Title:string;
    TypeDisplay:string;
    ListValidator:ValidatorFn[];
    ListToPL:List;
    TypeReceive:string;
    Receive:any;
    Sort:number;
    constructor(title:string,typeDisplay:string,listValidator:ValidatorFn[],listToPL:List
        ,typeReceive:string,receive:any,sort:number) {
        this.Title=title;
        this.TypeDisplay=typeDisplay;
        this.ListValidator=listValidator;
        this.ListToPL=listToPL;
        this.TypeReceive=typeReceive;
        this.Receive=receive;
        this.Sort=sort;
    }

    //let valid:ValidatorFn[]=[];
    //let addL:Add[]=[];//=[new Add("","",valid,null,"",null,1)];
}