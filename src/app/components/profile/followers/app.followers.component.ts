import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/layout/service/app.breadcrumb.service';

@Component({
    selector: 'app-followers',
    templateUrl: './app.followers.component.html',
})
export class AppFollowersComponent implements OnInit {

    followers = [
        {
           image:"/assets/demo/images/profile/2.svg",
           name:"Eleanor Pena",
           title:"Project Manager",
           type:"Contributor"
        }, {
            image:"/assets/demo/images/profile/5.svg",
            name:"Eleanor Pena",
            title:"UI/UX Designer",
            type:"Subscriber"
         }, {
            image:"/assets/demo/images/profile/image-2.svg",
            name:"Devon Lane",
            title:"Project Manager",
            type:"Author"
          }, {
            image:"/assets/demo/images/profile/image-3.svg",
            name:"Bessie Cooper",
            title:"Software Development Manager",
            type:"Contributor"
          }, {
            image:"/assets/demo/images/profile/image.svg",
            name:"Robert Fox",
            title:"Designer",
            type:"Project Manager"
         }, {
            image:"/assets/demo/images/profile/image-3.svg",
            name:"Bessie Cooper",
            title:"Software Development Manager",
            type:"Subscriber"
          }, {
            image:"/assets/demo/images/profile/2.svg",
            name:"Eleanor Pena",
            title:"Project Manager",
            type:"Author"
        }, {
            image:"/assets/demo/images/profile/5.svg",
            name:"Robert Fox",
            title:" Designer",
            type:"Project Manager"
        }
    ];

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Followers' }
        ]);
    }

    ngOnInit(): void {
    }


}
