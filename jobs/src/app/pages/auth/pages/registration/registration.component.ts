import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { regex, regexErrors, markFormGroupTouched } from "@app/shared";
import * as fromRoot from "@app/store";
import * as fromUser from "@app/store/user";
import {Store} from "@ngrx/store";


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;
    loading$ = this.store.select(fromUser.getLoading);

    constructor(
        private fb: FormBuilder,
        private store: Store<fromRoot.State>
    ) {
    }

    get regexErrors() {
        return regexErrors;
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            'email': [null, {
                updateOn: 'blur',
                validators: [
                    Validators.required,
                    Validators.maxLength(128),
                    Validators.pattern(regex.email)
                ]
            }],
            'password': [null, {
                updateOn: 'blur',
                validators: [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(30),
                    Validators.pattern(regex.password)
                ]
            }],
            'passwordRepeat': [null, {
                updateOn: 'blur',
                validators: [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(30),
                    Validators.pattern(regex.password)
                ]
            }],
        }, { validators: [this.repeatPasswordValidator] });
    }

    onSubmit(): void {
        if (this.form.valid) {
            const value = this.form.value;
            const credentials: fromUser.EmailPasswordCredentials = {
                email: value.email,
                password: value.password
            };

            this.store.dispatch(fromUser.signUpEmail({ payload: { credentials } }));
        } else {
            markFormGroupTouched(this.form);
        }
    }

    private repeatPasswordValidator(group: FormGroup): { [key: string]: boolean } {
        const password = group.get('password');
        const passwordRepeat = group.get('passwordRepeat');

        return passwordRepeat.value && password.value !== passwordRepeat.value
            ? { repeat: true }
            : null;
    }

}
