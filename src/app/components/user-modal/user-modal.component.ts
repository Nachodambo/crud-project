import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss',
})

export class UserModalComponent implements OnInit {
  private fb = inject(FormBuilder);
  private data = inject(MAT_DIALOG_DATA);
  public myForm!: FormGroup;
  public title: string = "";
  constructor(
  public dialogRef: MatDialogRef<UserModalComponent>,
  ){}
  ngOnInit(): void {
    this.initForm();
    this.setTitle();
  };

  initForm() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      job: ["", [Validators.required]],
    })
  }

  setTitle() {
    this.title = this.data.title;
  }

  onSubmit() {
    this.dialogRef.close(this.myForm.value)
  }
}
