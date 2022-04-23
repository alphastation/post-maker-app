import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  // newPost = 'No content whatsoever';
  // enteredValue = '';
  contentEntered = '';
  titleEntered = '';
  // @Output() postCreatedEvent = new EventEmitter<Post>();
  // postInput: HTMLTextAreaElement
  constructor(public postsService: PostsService) {
    // this.postsService = postsService;
  }
  onCreatingPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content); //instead of emmiting
    form.resetForm();
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreatedEvent.emit(post);
    // alert('Post is just added');
    // console.log(postInput);
    // console.dir(postInput);
    // this.newPost = 'Here goes the post message!!!';
    // this.newPost = postInput.value;
    // this.newPost = this.enteredValue;
  }
}
