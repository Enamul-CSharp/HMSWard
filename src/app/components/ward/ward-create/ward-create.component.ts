import { Component } from '@angular/core';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';
import { Router } from '@angular/router';
import { Nurse } from '../../../models/nurse';
import { Room } from '../../../models/room';


@Component({
  selector: 'app-ward-create',
  templateUrl: './ward-create.component.html',
  styleUrl: './ward-create.component.css'
})
export class WardCreateComponent {



  public model!: Ward;


  constructor(private Services: WardService, private router: Router) {

  }
  ngOnInit(): void {


    this.model = new Ward();

  }


  OnSubmit() {

    this.Services.SaveWard(this.model).subscribe({
      next: () => {
        this.router.navigate(["/ward"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  AddNurse() {

    this.model.nurses.push(new Nurse());

  }

  DeleteNurse(index: number) {

    const remItem = this.model.nurses.splice(index, 1);
  }
  Addroom() {

    this.model.rooms.push(new Room());

  }

  Deleteroom(index: number) {

    const remItem = this.model.rooms.splice(index, 1);
  }
}

