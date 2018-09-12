import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(	private postsService: PostsService, 
  				private formBuilder: FormBuilder, 
  				private router: Router
  			) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm() {
  	this.postForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required]
  	});
  }

  onAddPost() {
  	console.log(this.postsService.getPostLen());
  	const id = this.postsService.getPostLen();
  	const title = this.postForm.get('title').value;
  	const content = this.postForm.get('content').value;
  	const loveIt = 0;
  	const dontLoveIt = 0;
    const created_at = new Date();
  	const newPost = new Post(id, title, content, loveIt, dontLoveIt, created_at);
  
  	this.postsService.addNewPost(newPost);
  	this.router.navigate(['/post']);
  }

}
