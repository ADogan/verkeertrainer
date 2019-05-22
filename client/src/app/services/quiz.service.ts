import { Injectable, OnInit } from '@angular/core';
import { TrafficSignsService } from './traffic-signs.service';
import { ITrafficSign } from '../models/traffic-sign.model';

@Injectable()
export class QuizService implements OnInit {
    constructor(private trafficSignsService: TrafficSignsService) {}
        all_traffic_signs: ITrafficSign[] ;
    ngOnInit(){
        this.all_traffic_signs = this.trafficSignsService.getTrafficSigns();
    }
}