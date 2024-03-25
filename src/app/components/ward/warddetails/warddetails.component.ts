import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';


@Component({
  selector: 'app-warddetails',
  templateUrl: './warddetails.component.html',
  styleUrl: './warddetails.component.css'
})
export class WarddetailsComponent {
    public model!: Ward;
  id!: number;

  constructor(private Service: WardService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }

  LoadData() {
    this.Service.GetWard(this.id).subscribe((data: Ward) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

}
