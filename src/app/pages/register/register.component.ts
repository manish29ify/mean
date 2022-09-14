import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(frm: any) {
    this.authService.register(frm.value).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)

    })
  }
}
