import { ThisReceiver } from '@angular/compiler';
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
  customerCategory: string[] = ['Vip'];
  customerNat: string[] = ['Cameroonian'];
  customerQuality: string[] = ['Quality 1'];
  customerTitle: string[] = ['Aucun'];
  precisNais: string[] = ['D'];

  beacNatList: any[] = [
    { nat: '11', lib: 'Particuliers Nationaux' },
    { nat: '12', lib: 'Test' }
  ];
  beacNat!: any;

  cobacList: any[] = [
    {nat: '1101', lib: 'B E A C'},
    {nat: '1102', lib: 'Autres institutions D\'em...'},
    {nat: '1201', lib: 'B D E A C'},
    {nat: '1311', lib: 'Banques Associées'},
    {nat: '1312', lib: 'Banques non Associées'}
  ];
  cobac!: any;

  natureJuridiqueList: any[] = [
    {num: '10', lib: 'Banque'}
  ];
  natJuridique!: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _clienService: ClientService) { }

  ngOnInit(): void {

    this.beacNat = this.beacNatList[0];
    this.cobac = this.cobacList[0];
    this.natJuridique = this.natureJuridiqueList[0];

    this.initForm();
  }

  initForm() {
    this.customerForm = this._formBuilder.group({
      mat: ['', [Validators.required]],
      typeClient: [this.customerType[0], [Validators.required]],
      typeResident: [this.residentType[0], [Validators.required]],
      natClient: [this.customerNat[0], Validators.required],
      natBeac: [this.beacNat.nat, Validators.required],
      libNatBeac: [this.beacNat.lib, Validators.required],
      qualite: [this.customerQuality[0], Validators.required],
      libTitre: [this.customerTitle[0], Validators.required],
      nom: ['', Validators.required],
      prenom: [''],
      dateNaissance: [null, Validators.required],
      precisNaiss: [this.precisNais[0], Validators.required],
      lieuNaissance: ['', Validators.required],
      nomPere: [''],
      nomMere: [''],
      nomJeuneFille: [''],
      catClient: [this.customerCategory[0], Validators.required],
      profession: ['', Validators.required],
      cnipass: ['', Validators.required],
      placeIssuCni: [''],
      dateIssuCni: [null],
      dateExpCni: [null],
      nomAbrege: [''],
      nomJumelle: [''],
      raisonSociale: ['', Validators.required],
      siegeSocial: ['', Validators.required],
      telex: [''],
      numContrib: ['', Validators.required],
      natJuridique: [this.natJuridique.num, Validators.required]
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
    if (this.beacNat != null)
      this.customerForm.patchValue({ natBeac: this.beacNat.nat, libNatBeac: this.beacNat.lib });
    else
      this.customerForm.patchValue({ natBeac: null, libNatBeac: null });
  }

  checkTypeClient(value: string): boolean {
    return (this.customerForm.value['typeClient'] === value);
  }

  getCustomerType():string {
    return this.customerForm.value['typeClient'];
  }

}
