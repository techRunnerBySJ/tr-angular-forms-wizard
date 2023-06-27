import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wizardForm: FormGroup;
  currentStep: number = 1;

  constructor(private formBuilder: FormBuilder) {
    this.wizardForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  get form() {
    return this.wizardForm.controls;
  }

  goToNextStep() {
    this.currentStep++;
  }

  goToPreviousStep() {
    this.currentStep--;
  }

  submitForm() {
    if (this.wizardForm.invalid) {
      return;
    }

    // Process the form data
    console.log(this.wizardForm.value);
    alert('Form submitted successfully!');
  }
}
