import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";
import { GitHubProfile } from "./github-profile";

@Injectable()
export class HomeService{
    constructor(private httpClient:HttpClient){
    }
    
    getGitHubProfile(profile:string){
        let url=`https://api.github.com/users/${profile}`
        return this.httpClient.get<GitHubProfile>(url);
    }
}
