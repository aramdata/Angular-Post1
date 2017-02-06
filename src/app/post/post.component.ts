import { Component, OnInit,Input } from '@angular/core';
import {Post} from './post.model'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs:['postModel']
})
export class PostComponent implements OnInit {
  @Input() postModel:Post;
  showLargImage:string;
  closeLargeImage:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  ShowLargImage(model:Post){
          this.showLargImage=model.image;
          this.closeLargeImage=false;
  }
  
  CloseLargImage(){
 this.showLargImage="";
          this.closeLargeImage=true;
  }
}
