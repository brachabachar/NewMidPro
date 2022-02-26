export class Place {
    FullAddress:string;
    GoogleCoordinateX:number;
    GoogleCoordinateY:number;

   constructor(fullAddress:string,googleCoordinateX:number,googleCoordinateY:number) {
    this.FullAddress=fullAddress;
    this.GoogleCoordinateX=googleCoordinateX;
    this.GoogleCoordinateY=googleCoordinateY;
    
   }
}