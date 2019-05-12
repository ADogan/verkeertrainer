import { Injectable } from '@angular/core';
import { TrafficSignsService } from "./traffic-signs.service";
import { ITrafficSign } from './traffic-sign.model';

@Injectable()
export class QuizService {
    constructor(private trafficSignsService: TrafficSignsService) {}
        all_traffic_signs: ITrafficSign[] ;
    ngOnInit(){
        this.all_traffic_signs = this.trafficSignsService.getTrafficSigns();
    }
}