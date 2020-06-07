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
  dependencies: object;
  devDependencies: object;
  constructor() { }

  ngOnInit() {
    this.year = (new Date()).getFullYear();
    this.version = environment.appVersion;
    this.dependencies = environment.dependency;
    this.devDependencies = environment.devDependency;
  }

}
