import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout().subscribe(data=>{
      localStorage.clear();
      this.authService.authtoken='';
      this.router.navigate(['/login'])
    })
  }
}
