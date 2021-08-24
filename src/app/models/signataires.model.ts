export class Signataires {

  constructor (public serie : number, // id
               public nom : string,
               public prenom : string,
               public adresse1 : string,
               public bp : string,
               public ville : string,
               public pays : string,
               public qualite : string,
               public titre : string,
               public dateNaissance : Date,
               public lieuNaissance : string,
               public cniPass : string,
               public telephone1 : string,
               public nationalite : string,
               public libVille : string,
               public libTitre : string,
               public libNationalite : string,
               public dateCreation : Date) {}

}
