import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

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
  @Output() postCreatedEvent = new EventEmitter<Post>();
  // postInput: HTMLTextAreaElement

  onCreatingPost() {
    const post: Post = {
      title: this.titleEntered,
      content: this.contentEntered,
    };
    this.postCreatedEvent.emit(post);
    // alert('Post is just added');
    // console.log(postInput);
    // console.dir(postInput);
    // this.newPost = 'Here goes the post message!!!';
    // this.newPost = postInput.value;
    // this.newPost = this.enteredValue;
  }
}
