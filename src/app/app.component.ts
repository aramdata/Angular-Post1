import { Component } from '@angular/core';
import {Post} from './post/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi!';
  posts:[Post]=[
    {title:"salam",body:"Hi",image:"http://lorempixel.com/400/200/",likeCount:10},
    {title:"salam2",body:"Hi",image:"http://lorempixel.com/400/200/",likeCount:10},
    {title:"salam3",body:"Hi",image:"http://lorempixel.com/400/200/",likeCount:10},
    {title:"salam4",body:"Hi",image:"http://lorempixel.com/400/200/",likeCount:10},
    {title:"salam5",body:"Hi",image:"http://lorempixel.com/400/200/",likeCount:10},
    {title:"salam6",body:"Hi",image:"http://lorempixel.com/400/200/",likeCount:10},
  ];
}
