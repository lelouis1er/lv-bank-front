import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RouteStateService } from 'src/app/services/route-state.service';
import { SessionService } from 'src/app/services/session.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserContextService } from 'src/app/services/user-context.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    login : '',
    password: ''
  };


  version!: string;

  msgs!: any[];

  constructor(
    private userService:UserService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userContextService: UserContextService
  ) { }

  ngOnInit(): void {
    this.version = '0.0.0';
  }

  onSubmit() {
    this.userService.login(this.user).subscribe(
      (date) => {

      },
      (error) => {
       // this.showError(error);
      }
    );
  }

  onSubmitForm() {
    let user: User = this.userService.getUserByUserNameAndPassword(this.user.login, this.user.password);
    if (user) {
      this.userContextService.setUser(user);
      this.routeStateService.add("Dashboard", '/main/dashboard', null, true);
      return;
    }
    this.toastService.addSingle('error', '', 'Invalid user.');
    return;
  }


}
