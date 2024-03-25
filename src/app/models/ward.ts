import { Nurse } from "./nurse";
import { Room } from "./room";

export class Ward {
  wardId: Number = 0;
  name: string = '';
  
    

  nurses: Nurse[]=[];
  rooms: Room[]=[];


}
