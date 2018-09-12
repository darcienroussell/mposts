import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from "../models/post.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onSaveToServer() {
  	this.postsService.savePostToServer();
  }

  onGetToServer() {
  	this.postsService.getPostToServer();
  }

}
