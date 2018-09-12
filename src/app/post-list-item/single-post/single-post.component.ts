import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from "../../models/post.model";
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,
   private postsService: PostsService,
   private router: Router) { }

  ngOnInit() {
  	const id = this.route.snapshot.params['id'];
  	this.post = this.postsService.getSinglePost(+id);
  }

  onBack() { this.router.navigate(['/post']); }

}
