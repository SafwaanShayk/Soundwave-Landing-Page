import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  contactForm!: FormGroup;

  private myForm!: AngularFirestoreCollection<any>;
  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.myForm = this.firestore.collection('Data');
    this.contactForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      feedback: [null],
    });
  }
  submitData(value: any) {
    this.myForm.add(value).then((res) => {
      'Submit Successfully';
    });
  }
}
