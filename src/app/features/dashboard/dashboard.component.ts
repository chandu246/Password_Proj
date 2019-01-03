import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
    private subs: Array<Subscription> = [];
    constructor(private activatedRoute: ActivatedRoute) {};
    
    ngOnInit() {
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
      }
}
