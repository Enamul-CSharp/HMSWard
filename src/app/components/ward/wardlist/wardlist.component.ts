import { Component } from '@angular/core';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';


@Component({
  selector: 'app-wardlist',
  templateUrl: './wardlist.component.html',
  styleUrl: './wardlist.component.css'
})
export class WardlistComponent {
  public model: Ward[] = [];
  constructor(private service: WardService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetWards().subscribe((response: Ward[]) => {
      this.model = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteWard(ward: Ward) {
    let confirmDelete: boolean = confirm(`Delete ${ward.name}?`);
    if (confirmDelete) {
      this.service.DeleteWard(ward.wardId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
