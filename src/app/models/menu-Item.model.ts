export class CustomerMenuItem {

  constructor(public Label: string,
              public Icon: string,
              public RouterLink: string | null,
              public Childs: CustomerMenuItem[] | null,
              public IsChildVisible: boolean) {
  }

}
