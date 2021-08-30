import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ClientService } from 'src/app/services/crm/client.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  customerForm!: FormGroup;
  errorMsg: string = "";

  residentType: string[] = ['Resident', 'Not resident'];
  customerType: string[] = ['Physical person', 'Corporation'];
  customerNat: string[] = ['Cameroonian'];

  beacNatList: any[] = [
    { nat: '11', lib: 'Particuliers Nationaux' },
    { nat: '12', lib: 'Test' }
  ];
  beac!: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _clienService: ClientService) { }

  ngOnInit(): void {

    this.beac = this.beacNatList[0];

    this.initForm();
  }

  initForm() {
    this.customerForm = this._formBuilder.group({
      mat: ['', [Validators.required]],
      typeClient: [this.customerType[0], [Validators.required]],
      typeResident: [this.residentType[0], [Validators.required]],
      natClient: [this.customerNat[0], Validators.required],
      natBeac: [this.beac.nat, Validators.required],
      libNatBeac: [this.beac.lib, Validators.required]
    });
  }

  onFormSubmit() {
    console.log(this.customerForm.value);

  }

  formIsValid(form: NgForm): boolean {
    const val = form.invalid;
    if (val == true)
      return true;
    else return false;
  }

  onChooseBeacNat() {
    console.log('Cangement de nature');

    this.customerForm.setValue({ natBeac: this.beac.nat, libNatBeac: this.beac.lib });
  }

}
