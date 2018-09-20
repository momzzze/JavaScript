import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service';
import { GitHubProfile } from './github-profile';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers:[HomeService]
})

export class HomeComponent implements OnInit {
    profile: GitHubProfile;
    constructor(private homeService: HomeService) {        
    }

    ngOnInit(){
        this.homeService.getGitHubProfile('ivaylokenov')
        .subscribe(data=>this.profile=data,err=>console.log(err))
    }
}



