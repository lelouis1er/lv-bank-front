import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Agence } from 'src/app/models/agence.model';
import { AgenceService } from 'src/app/services/crm/agence.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-agence-create',
  templateUrl: './agence-create.component.html',
  styleUrls: ['./agence-create.component.css']
})
export class AgenceCreateComponent implements OnInit {

  agenceForm!: FormGroup ;

  constructor(private _formBuilder : FormBuilder,
              private _agenceService : AgenceService,
              private _routeStateService : RouteStateService,
              private _router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.agenceForm = this._formBuilder.group({
      code : '',
      libelle : '',
      adresse : '',
      bp : '',
      pays : '',
      tel : '',
      fax : ''
    })
  }

  on_submit () {
    const valeursForm = this.agenceForm.value;
    console.log(valeursForm);
    const agence = new Agence(valeursForm['code'],
                              valeursForm['libelle'],
                              valeursForm['adresse'],
                              valeursForm['bp'],
                              valeursForm['pays'],
                              valeursForm['tel'],
                              valeursForm['fax'],
                              new Date());


    this._agenceService.addAgence(agence).subscribe(
      (value) => {
        console.log("opération éfectué : " + value);
      }, (error) => {
        console.log("OUPS une erreur : " + error);
      }
    );
    this.link_retour();
  }

  link_retour() {
    this._routeStateService.loadPrevious();
  }

}
