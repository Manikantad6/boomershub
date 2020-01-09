import { Component, OnInit } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  properties: any;
  result: any;

  // searchType = 'fae';
  searchText: string;
  constructor(private data: DataService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    console.log('hii');
    // this.data.getPropList().subscribe(res => {
    //   this.result = res;
    //   this.properties = this.result.data;
    //   console.log(res);
    // });

  }
  onSearchChange(searchValue: string): void {
    console.log(searchValue);
    console.log(this.searchText)
    this.data.searchProperties(searchValue).subscribe(data=>{
      this.result = data;
      this.properties = this.result.data;
    })
  }

    transform(value) {
      console.log(value)
      return this.sanitizer.bypassSecurityTrustResourceUrl(value)
    }
  routing(id) {
    console.log('---------------')
    console.log(id);
  }

}
