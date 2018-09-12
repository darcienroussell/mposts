import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/subject';
import { Post } from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts = [
		{
			id: 1,
			title: 'Mon premier post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			loveIt: 2,
			dontLoveIt: 0,
      created_at: new Date()
		},

		{
			id: 2,
			title: 'Mon deuxieme post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			loveIt: 0,
			dontLoveIt: 1,
      created_at: new Date()
		},

		{
			id: 3,
			title: 'Encore un post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			loveIt: 0,
			dontLoveIt: 0,
      created_at: new Date()
		}
	];

	postsSubject = new Subject<any[]>();

  constructor(private router: Router, private httpClient: HttpClient) { }

  emitPosts() {
  	this.postsSubject.next(this.posts);
  }

  addLoveItPost(id: number) {
  	this.posts[id].loveIt++;
  	this.emitPosts();
  }

  addDontLoveItPost(id: number) {
  	this.posts[id].dontLoveIt++;
  	this.emitPosts();
  }

  getPostLen() {
  	return this.posts[(this.posts.length - 1)].id + 1;
  }

  getSinglePost(id: number) {
  	return this.posts[id];
  }

  addNewPost(newPost: Post) {

  	this.posts.push(newPost);
  	this.emitPosts();

  }


  removePost(post: Post) {
  	const postIndexToRemove = this.posts.findIndex(
  		(postEl)=>{
  			if(postEl === post) {
  				return true;
  			}
  		}
  	);
  	this.posts.splice(postIndexToRemove, 1);
  	this.emitPosts();
  }

  savePostToServer() {
    this.httpClient.put('https://http-client-demo-17ea6.firebaseio.com/posts.json', this.posts).subscribe(
      ()=>{
        console.log('Enregistrement terminé!');
      },
      (error)=>{
        console.log('Erreur de sauvegarde' +error);
      }
    );
  }

  getPostToServer() {
    this.httpClient.get<any[]>('https://http-client-demo-17ea6.firebaseio.com/posts.json').subscribe(
      (response)=>{
        this.posts = response;
        this.emitPosts();
        console.log('Chargement terminé!');
      },
      (error)=>{
        console.log('Erreur de chargement!' + error);
      }
    );
  }
}
