import { Component } from '@angular/core';
import { FollowupsService } from '../../../services/followups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Followups } from '../../../models/followups';

@Component({
  selector: 'app-followup-details',
  templateUrl: './followup-details.component.html',
  styleUrl: './followup-details.component.css'
})
export class FollowupDetailsComponent {
  public model!: Followups;
  id!: number;

  constructor(private Service: FollowupsService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }

  LoadData() {
    this.Service.GetFollowups(this.id).subscribe((data: Followups) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }


}
