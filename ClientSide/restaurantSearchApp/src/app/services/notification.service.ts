import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  //https://www.npmjs.com/package/ngx-toastr
  messageOptions: Partial<IndividualConfig> = {
    closeButton: true,
    progressBar: true
  };
  constructor(private toastr: ToastrService) { }

  success(message, title) {
    this.toastr.success(message, title, this.messageOptions)
  }

  error(message, title) {
    this.toastr.error(message, title, this.messageOptions)
  }

  
  info(message, title) {
    this.toastr.info(message, title, this.messageOptions)
  }

  
  warning(message, title) {
    this.toastr.warning(message, title, this.messageOptions)
  }
}