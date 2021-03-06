import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    
    categoryId: any;
    category: any;
    page = 1;

  constructor(
      private data: DataService,
      private activatedRoute: ActivatedRoute,
      private rest: RestApiService
      
  ) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(rest => {
          this.categoryId = rest['id'];
          this.getProducts();
      });
  }
  
  get lower(){
      return 10 * (this.page -1) + 1;
  }
  
  get upper(){
      return Math.min(10 * this.page, this.category.totalProducts);
  }
  
  async getProducts(event ?: any){
      if (event){
          this.category = null;
      }
      
      try {
          
          const data = await this.rest.get(`http://localhost:3000/api/categories/${this.categoryId}?page=${this.page -1}`);
          
          
          console.log('restlink');
          console.log(`http://localhost:3000/api/categories/${this.categoryId}?page=${this.page -1}`);
          
          console.log('data');
          console.log(data);
          
          
          
          
          data['success'] ? (this.category = data) : this.data.error(data['message']);
            
      } catch (error){
          this.data.error(error);
      }
      
  }

}
