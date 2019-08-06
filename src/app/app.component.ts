import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    name = 'Dean Byrne';
    title = 'Portfolio';

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(this.name + ' | ' + this.title);
    }
}
