import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app.home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.scss']
})
export class AppHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToPlay() {
      this.router.navigate(['/jogar']);
  }

}