import { Injectable } from '@angular/core';

import { NavigationStart, Router} from '@angular/router';

@Injectable()
export class DataService {
    
    message = '';
    messageType = 'danger';
    
    user: any;

  constructor(private router: Router) { 
  
      this.router.events.subscribe(event => {
          if (event instanceof NavigationStart){
              this.message = '';
          }
      });
  
  }
  
  error(message){
      this.message = 'danger';
      this.message = message;
  }
  
  success(message){
      this.message = 'success';
      this.message = message;
  }
  
  warning(message){
      this.message = 'warning';
      this.message = message;
  }
  

}
