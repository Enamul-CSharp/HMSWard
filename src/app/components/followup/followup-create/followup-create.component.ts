import { Component } from '@angular/core';
import { FollowupsService } from '../../../services/followups.service';
import { Router } from '@angular/router';
import { Followups } from '../../../models/followups';

@Component({
  selector: 'app-followup-create',
  templateUrl: './followup-create.component.html',
  styleUrl: './followup-create.component.css'
})
export class FollowupCreateComponent {

  public model!: Followups;
  constructor(private Services: FollowupsService, private router: Router) {

  }
  ngOnInit(): void {


    this.model = new Followups ();

  }


  OnSubmit() {

    this.Services.SaveFollowups(this.model).subscribe({
      next: () => {
        this.router.navigate(["/Followups"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  //AddNurse() {

  //  this.model.nurses.push(new Nurse());

  //}

  //DeleteNurse(index: number) {

  //  const remItem = this.model.nurses.splice(index, 1);
  //}
  //Addroom() {

  //  this.model.rooms.push(new Room());

  //}

  //Deleteroom(index: number) {

  //  const remItem = this.model.rooms.splice(index, 1);
  //}

}
