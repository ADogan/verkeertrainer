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
    learn_model: boolean = false;
    remove_model:boolean = false;
    
    ngOnInit() {
        this.trafficSignImageUrlBase = this.trafficSignsService.getTrafficSignsImagesUrlBase();
        this.signsSourceUrl = this.trafficSignsService.getTrafficSignsSourceUrl();

        const response = this.trafficSignsService.getTrafficSigns();
        this.TrafficSigns = response;
    }

    signClicked(sign_description, element) {
        if(this.learn_model){
            alert(sign_description);
            console.log(sign_description);
        } else if(this.remove_model) {
            this.TrafficSigns.splice(this.TrafficSigns.indexOf(element), 1);
            console.log(element)
            console.log(this.TrafficSigns.length);
        } else {
            console.log("Just a click on:" + element);
        }
    }

    clicked_practice_mode() {
        if(this.learn_model === false){
            this.remove_model = false;
        }
    }

    clicked_remove_mode() {
        if(this.remove_model === false){
            this.learn_model = false;
        }
    }
}
