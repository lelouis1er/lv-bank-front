import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'banque';
  showLoader : any = null;

  constructor(
    private primengConfig: PrimeNGConfig,
    private toast:MessageService,
    private loaderService : LoaderService
  ) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  showError(msg:any) {
    this.toast.add ({severity:'error', summary:'Error', detail:msg});
  }

  ngOnDestroy() {
    this.loaderService.status.observers.forEach(function (element) { element.complete(); });
  }

}
