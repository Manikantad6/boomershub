import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Data } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  url: string;
  resp: any;
  propertyDetails: any;
  images: any;
  imageSrc: any;
 // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private data: DataService, public router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.router.url.split('/')[2];
    if (this.url !== undefined && this.url !== "") {
        this.data.searchbyId(this.url).subscribe(response => {
            this.resp = response;
            console.log(response);
            this.images = this.resp.data[0].images.slice(1,-1).split(',');
            this.propertyDetails = this.resp.data[0];
            this.imageSrc = this.images[0].slice(1,-1);
            console.log(this.propertyDetails);
        })
    }
  }

  changeImage(source: any) {
    console.log(source);
    this.imageSrc = source;
  }

}
