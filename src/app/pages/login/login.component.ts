import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { LoginService } from 'app/services/login.service';
import { UsersService } from 'app/services/users.service';
import { error } from 'console';
import { first } from 'rxjs';
import * as sweetAlerts from '../../shareds/sweet-Alerts/sweetAlerts';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signUpForm: FormBuilder;
  submitted = false;
  roleId;
  returnUrl: string;
  checkError = false;
  error = "";


  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formSignBuilder: FormBuilder,
    private el: ElementRef,
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      mdp: ["", [Validators.required, Validators.minLength(4)]],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
    localStorage.removeItem('userId');
    localStorage.removeItem('currentUser');
    // this.signUpForm = this.formSignBuilder.group({
    //   nom: ["", Validators.required],
    //   prenom: ["", Validators.required],
    //   tel: ["", Validators.required],
    //   email: ["", Validators.required],
    //   confirm: ["", Validators.required],
    //   mdp: ["", [Validators.required, Validators.minLength(4)]],
    // });
  }

  get f() {
    return this.loginForm.controls;
  }

  scrollToFirstInvalidateField(form) {
    for (const key of Object.keys(form.controls)) {
      if (form.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector(
          '[formcontrolname="' + key + '"]'
        );
        invalidControl.focus();
        break;
      }
    }
  }
  signUp() {
    this.submitted = true;
    // stop if form is invalid
    if (this.loginForm.invalid) {
      this.scrollToFirstInvalidateField(this.loginForm);
      return;
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop if form is invalid
    if (this.loginForm.invalid) {
      this.scrollToFirstInvalidateField(this.loginForm);
      return;
    }
    console.log(this.loginForm.controls.email.value)
    console.log(this.loginForm.controls.mdp.value)
    this.loginService.authLogin(this.loginForm.controls.email.value, this.loginForm.controls.mdp.value).subscribe(
      {
        next: (res: any) => {
          console.log("frontend data content",res);
          if (res.role === 'admin') {
            console.log("passer à dashboard");
            this.router.navigate(['src/app/pages/dashboard/dashboard.component.html']);
            // this.router.navigate(["pages/dashboard"]);
          } else
            if (res.role == "member") {
              // renvoie a une page simple d'utilisateur
              this.router.navigate(["dashboard"]);
            }
        },
        error: (error) => {
          this.checkError = true;
          this.error = error.error;
          if (error.status == 401) {
            let errorType = 'error';
            let errorTitle = 'Identifiant Incorrect ou compte inactive';
            sweetAlerts.showAlert(errorTitle, 'Veuillez vérifier vos identifiants.', errorType, false);
          }
        }
      }
    )


  }




}
