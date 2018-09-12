import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { PostsService } from '../services/posts.service';
import { Post } from "../models/post.model";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  posts: any[];
	postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit() {
  	this.postsSubscription = this.postsService.postsSubject.subscribe(
  		(posts: any[])=>{
  		this.posts = posts;
  		}
  	);
  	this.postsService.emitPosts();
  }

  onViewPost(id: number) {
    this.router.navigate(['/post', 'single', id]);
  }

  onDelete(post: Post) {
  	this.postsService.removePost(post);
  }

  onLoveIt(id: number) {
  	this.postsService.addLoveItPost(id);
  }

  onDontLoveIt(id: number) {
  	this.postsService.addDontLoveItPost(id);
  }

  ngOnDestroy() {
  	this.postsSubscription.unsubscribe();
  }

}
