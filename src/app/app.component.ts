import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'refinitiv';
  categories: string[];
  catLists: string[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<[]>('https://api.publicapis.org/categories')
      .subscribe(res => {
        this.categories = res;
        this.catLists = this.categories;
      });
  };

  searchCat(event) {
    let str: string = event.target.value;
    const catLists = this.categories;
    const newCatLists = catLists.filter(result => {
      result = result.toLowerCase();
      return result.includes(str);
    });
    this.catLists = newCatLists;
  };
};
