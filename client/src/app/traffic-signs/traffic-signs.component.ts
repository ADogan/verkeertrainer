import { Component } from '@angular/core';
import { TrafficSignsService } from '../services/traffic-signs.service';
import { ITrafficSign } from '../models/traffic-sign.model';

@Component({  templateUrl: './traffic-signs.component.html',
styleUrls: ['./traffic-signs.component.css' ]})
export class TrafficSignsComponent {
    constructor(private trafficSignsService: TrafficSignsService) {}
    TrafficSigns: ITrafficSign[];
    trafficSignImageUrlBase: string;
    signsSourceUrl: string;

    ngOnInit() {
        this.trafficSignImageUrlBase = this.trafficSignsService.getTrafficSignsImagesUrlBase();
        this.signsSourceUrl = this.trafficSignsService.getTrafficSignsSourceUrl();

        const response = this.trafficSignsService.getTrafficSigns();
        this.TrafficSigns = response;
    }
}
