import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';
import { Nurse } from '../../../models/nurse';
import { Room } from '../../../models/room';

@Component({
  selector: 'app-ward-edit',
  templateUrl: './ward-edit.component.html',
  styleUrl: './ward-edit.component.css'
})
export class WardEditComponent {


  public model!: Ward;
  id!: number;

  constructor(private Service: WardService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }


  OnSubmit() {


    this.Service.UpdateWard(this.model).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetWard(this.id).subscribe((data: Ward) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
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

