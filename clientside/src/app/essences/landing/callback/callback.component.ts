import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  @ViewChild('callbackModal') modal: any;
  callbackForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toast: ToastService,
    private translate: TranslateService
  ) {
    this.callbackForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.email],
      'comment': [null, Validators.required],
      'agree': [false, Validators.pattern('true')],
    });
  }

  ngOnInit() {
  }

  showOrHide(show) {
    show ? this.modal.show() : this.modal.hide();
  }

  onSubmit() {
    if (this.callbackForm.valid) {
      const data = this.callbackForm.getRawValue();
      const httpParams = new HttpParams()
              .set('name', data.name)
              .set('email', data.email)
              .set('comment', data.comment)
              .set('_wpcf7', '430')
              .set('_wpcf7_version', '4.6.1')
              .set('_wpcf7_locale', 'ru_RU')
              .set('_wpcf7_unit_tag', 'wpcf7-f430-p4-o2')
              .set('_wpcf7_is_ajax_call', '1');
      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

      // submit goes here
      this.http.post(
        '/test.php',
        httpParams,
        {
          headers,
          observe: 'response',
          responseType: 'text'
        }
      ).subscribe(
        res => this.translate.get('callback.message')
          .subscribe(x => {
            this.toast.success( x, null, {
              extendedTimeOut: 3000, positionClass: 'toast-bottom-left'
            });
            this.callbackForm.reset();
            this.callbackForm.controls.agree.setValue(false);
            this.modal.hide();
          }),
        (err) => this.translate.get('callback.messageError')
          .subscribe(x => {
            this.toast.error( x, null, {
              extendedTimeOut: 3000, positionClass: 'toast-bottom-left'
            });

          })
      );
    }

  }
}
