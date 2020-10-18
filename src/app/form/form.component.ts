import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ConfigService } from '../config.service';
import { Forminfo } from '../forminfo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private configService: ConfigService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.showConfig();
    this.clear();
  }

  config: Forminfo;
  info: Forminfo;
  submitstatus: string;

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Forminfo) => {this.config = { ...data }; this.updateProfile();});
  }

  profileForm = this.fb.group({
    Name: ['',Validators.required],
    Email: ['',Validators.required],
    Feedback: ['',Validators.required],
    Comment: [''],
  });

  updateProfile() {
    this.profileForm.patchValue({
      Name: this.config.name,
      Email: this.config.email,
      Comment: this.config.comment,
      Feedback: this.config.feedback
    });
  }
  onSubmit() {
    this.clear();
    this.configService.addinfo(this.profileForm.value).subscribe(
      data => {
        this.submitstatus = "successfully submitted";
        this.updateProfile();
      },
      error => {
        this.submitstatus = "Not submitted";
        this.updateProfile();
      }
    );
  }

  clear(){
    this.submitstatus = '';
  }

}
