import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article, articles } from '../articles';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('articleId'));

    // Find the product that correspond with the id provided in route.
    this.article = articles.find(article => article.id === articleIdFromRoute);
  }
}
