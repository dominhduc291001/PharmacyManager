/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class ErrorPageComponent implements OnInit {
    location: Location;

    // eslint-disable-next-line @typescript-eslint/member-ordering
    constructor(location: Location) { this.location = location; }

    ngOnInit(): void {

    }

    GoBack(): void {
        this.location.back();
    }
}
