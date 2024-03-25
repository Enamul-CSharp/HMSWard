import { Component, OnInit } from '@angular/core';
import { Followups } from '../../../models/followups';
import { FollowupsService } from '../../../services/followups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../../models/patient';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-followup-edit',
  templateUrl: './followup-edit.component.html',
  styleUrl: './followup-edit.component.css'
})
export class FollowupEditComponent implements OnInit {
  public model!: Followups;
  public patients!: Patient[];
  id!: number;

  constructor(private Service: FollowupsService, private CommonApi: CommonService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();

    this.CommonApi.GetPatient().subscribe((data) => {
      this.patients = data;
    });
  }


  OnSubmit() {


    this.Service.UpdateFollowups(this.model).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetFollowup(this.id).subscribe((data: Followups) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });

  }
}
