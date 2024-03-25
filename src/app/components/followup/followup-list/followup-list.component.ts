import { Component } from '@angular/core';
import { FollowupsService } from '../../../services/followups.service';
import { Followups } from '../../../models/followups';

@Component({
  selector: 'app-followup-list',
  templateUrl: './followup-list.component.html',
  styleUrl: './followup-list.component.css'
})
export class FollowupListComponent {
  public model: Followups[] = [];
  constructor(private service: FollowupsService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetFollowups().subscribe((response: Followups[]) => {
      this.model = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteFollowups(Followup: Followups) {
    let confirmDelete: boolean = confirm(`Delete ${Followup.followupId}?`);
    if (confirmDelete) {
      this.service.DeleteFollowups(Followup.followupId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }

}
