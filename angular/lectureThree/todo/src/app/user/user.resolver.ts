import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})


export class UserResover implements Resolve<any>{
    constructor(private userService: UserService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        this.userService.loadUser(route.params.id);
        return true;
    }

}