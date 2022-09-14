import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([""])
    }
  }


  onSubmit(frm: any) {
    // console.log('====================================');
    // console.log(frm.value);
    // console.log('====================================');
    this.authService.checkUser(frm.value).subscribe({
      next: (data: any) => {
        console.log("data", data);

        this.authService.login(data['token'])
        this.router.navigate([""])
      },
      error: err => console.log({ err }),
    })
    // this.authService.login(frm.value)

  }
}
