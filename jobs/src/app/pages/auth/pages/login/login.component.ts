import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from "@angular/forms";
import {Observable} from "rxjs";
import {markFormGroupTouched, regex, regexErrors} from "@app/shared";
import * as fromRoot from "@app/store";
import * as fromUser from "@app/store/user";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

    loading$: Observable<boolean>;
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private store: Store<fromRoot.State>
    ) {

    }

    get regexErrors() {
        return regexErrors;
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: [null, {
                updateOn: 'blur',
                validators: [
                    Validators.required,
                    Validators.maxLength(128),
                    Validators.pattern(regex.email)
                ]
            }],
            password: [null, {
                updateOn: 'change',
                validators: [
                    Validators.required
                ]
            }],
        })
    }

    public onSubmit(): void {
        if (this.form.valid) {
            const value = this.form.value;

            const credentials: fromUser.EmailPasswordCredentials = {
                email: value.email,
                password: value.password
            };

            this.store.dispatch(fromUser.signInEmail({
                payload: {
                    credentials
                }
            }));

        } else {
            markFormGroupTouched(this.form);
        }
    }

}
