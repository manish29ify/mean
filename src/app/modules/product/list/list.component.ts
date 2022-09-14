import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError, Observable } from 'rxjs';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loginForm: any
  addForm: FormGroup | any;
  productList$!: Observable<Products>;
  constructor(private frm: FormBuilder, public modalService: BsModalService, private productService: ProductService) {
    this.loginForm = frm.group({
      name: [""],
      password: [""],
      address: frm.group({
        houseNo: ["", Validators.required],
        street: ["", Validators.required],
        locality: ["", Validators.required]
      })
    })

    this.addForm = frm.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      price: ["", [Validators.required]],
      image: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loadData()
    //.subscribe(console.log);
  }

  loadData() {
    this.productList$ = this.productService.getProduct()
  }

  submit() {
    console.log("Submit", this.loginForm.value);
  }



  submitUser(usrForm: any) {
    console.log("submitUser", usrForm.value);
    console.log("submitUser", usrForm.value);

  }





  getFile(e: any) {
    let extensionAllowed: { [key: string]: boolean } = { png: true, jpeg: true };
    console.log(e.target.files);
    if (e.target.files[0].size / 1024 / 1024 > 20) {
      alert("File size should be less than 20MB")
      return;
    }
    if (extensionAllowed) {
      let nam = "" + e.target.files[0].name.split('.').pop();
      if (!extensionAllowed["png"]) {
        alert("Please upload " + Object.keys(extensionAllowed) + " file.")
        return;
      }
    }
    this.addForm.patchValue({ image: e.target.files[0] })
  }

  addProduct() {
    let fromVal = this.addForm.value
    console.log("fromVal", fromVal);
    let uploadData = new FormData();
    for (const property in fromVal) {
      uploadData.append(property, fromVal[property]);
    }
    this.modalService.hide()
    this.productService.addProduct(uploadData).subscribe({
      next: data => this.loadData(),
      error: err => this.loadData()
    })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: data => this.loadData(),
      error: err => this.loadData()
    })
  }
}



