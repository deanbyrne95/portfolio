import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number;
  version: string;
  constructor() { }

  ngOnInit() {
    this.year = (new Date()).getFullYear();
    this.version = environment.appVersion;
  }

}
