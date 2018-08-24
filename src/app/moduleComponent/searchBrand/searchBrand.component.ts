import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../core/services/youtube.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-brand',
  templateUrl: './searchBrand.component.html',
  styleUrls: ['./searchBrand.component.css']
})
export class SearchBrandComponent implements OnInit {
  countries;
  videoCategories;
  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  constructor(private youtubeService: YoutubeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getcountryCode();
    this.getCategories();
  }
  getcountryCode() {
    this.activatedRoute.params.subscribe((params) => {
      this.youtubeService.getcountryCode().subscribe((res) => {
        if (res.status === 200) {
          this.countries = res.body.data
        } else {

        }

      }), (error) => {

      }
    });
  }
  getCategories() {
    this.activatedRoute.params.subscribe((params) => {
      this.youtubeService.getvideoCategories().subscribe((res) => {
        if (res.status === 200) {
          console.log(res.body.data);
        } else {

        }

      }), (error) => {

      }
    });
  }
}
