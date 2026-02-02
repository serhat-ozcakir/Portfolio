declare const bootstrap: any;

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  imports: [RouterLink, TranslateModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  @ViewChild('successToast') successToast?: ElementRef;
  @ViewChild('errorToast') errorToast?: ElementRef;

  isSending = false;
  sentMessage: boolean | null = null;
  userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'blur',
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    message: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    completed: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
      updateOn: 'change',
    }),
  })

  get email() { return this.userForm.get('email') }
  get name() { return this.userForm.get('name') }
  get message() { return this.userForm.get('message') }
  get completed() { return this.userForm.get('completed') }

  formSubmit(): void {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) { return; }
    console.log(this.userForm.value);
    this.isSending = true;
    this.sentMessage = null;

    try {
      this.sentMessage = true;
      this.showToast('success')
      this.userForm.reset({
        name: '',
        email: '',
        message: '',
        completed: false
      });
    } catch (error) {
      this.sentMessage = false;
      this.showToast('error');
    } finally {
      this.isSending = false;
    }
  }
  
  showToast(type: 'success' | 'error'): void {
    setTimeout(() => {
      const item =
        type === 'success' ? this.successToast?.nativeElement : this.errorToast?.nativeElement;
      if (!item) return;
      const toast = new bootstrap.Toast(item, { delay: 3000 });
      toast.show();
    }, 0);
  }
}
