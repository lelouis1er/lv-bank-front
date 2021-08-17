export class CustomerMenuItem {

  Label: string;
  Icon: string;
  RouterLink: string;
  Childs: CustomerMenuItem[];
  IsChildVisible: boolean;

  constructor() {
    this.Label = '';
    this.Icon = '';
    this.RouterLink = '';
    this.Childs = [];
    this.IsChildVisible = false;
  }

}
