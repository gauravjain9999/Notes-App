import { LoginRegisterComponent } from './../../login-regsiter/login-register.component';
import { Component, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { FormControl } from "@angular/forms";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('sidenav') drawer?: MatSidenav;
  hideRequiredControl = new FormControl(false);
  mediaFlagObserver = false;

  constructor(public mediaObserver: MediaObserver, private router: Router,
  private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {

    this.mediaObserver.asObservable().subscribe((media: MediaChange[]) =>{
      this.mediaFlagObserver =(media[1].mqAlias === 'lt-md') ? true : false;
    })

  }


  close(event: any) {
    this.drawer?.close();
  }

  openSetting(){
    this.bottomSheet.open(LoginRegisterComponent);
    // this.router.navigate(['login-Register']);
  }



}
