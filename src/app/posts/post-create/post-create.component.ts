import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  // newPost = 'No content whatsoever';
  // enteredValue = '';
  contentEntered = '';
  titleEntered = '';
  private mode = 'create';
  private postId: string;
  public post: Post;
  // @Output() postCreatedEvent = new EventEmitter<Post>();
  // postInput: HTMLTextAreaElement
  constructor(public postsService: PostsService, public route: ActivatedRoute) {
    // this.postsService = postsService;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        // this.postId = paramMap.get('postId') || '';
        this.post = this.postsService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
  onAddingOrUpdatingPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.content); //instead of emmiting
    } else {
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }
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
