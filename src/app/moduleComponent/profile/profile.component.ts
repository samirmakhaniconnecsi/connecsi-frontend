import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../core/services/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  brandDetilas;
  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getBranDetilas();
  }
  getBranDetilas() {
    let id = window.sessionStorage.getItem("connecsi_key");
    this.activatedRoute.params.subscribe((params) => {
      this.brandService.getBrandById(id).subscribe((res) => {
        if (res.status === 200) {
          this.brandDetilas=res.body.data
        }else{

        }

      }), (error) => {

      }
    });

  }
}
