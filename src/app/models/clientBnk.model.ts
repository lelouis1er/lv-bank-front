export class ClientBnk {

  constructor (public client : string, // id
               public agence : string,
               public nom : string,
               public prenom : string,
               public adresse1 : string,
               public adresse2 : string,
               public adresse3 : string,
               public bp : string,
               public ville : string,
               public pays : string,
               public typeResident : string,
               public agentEco : string,
               public activiteEco : string,
               public natClient : string,
               public libNatClient : string,
               public natJuridique : string,
               public qualite : string,
               public titre : string,
               public password : string) {

    }
}
