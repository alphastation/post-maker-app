import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  newPost = 'No content whatsoever';
  enteredValue = '';
  // postInput: HTMLTextAreaElement
  onAddingPost() {
    // alert('Post is just added');
    // console.log(postInput);
    // console.dir(postInput);
    // this.newPost = 'Here goes the post message!!!';
    // this.newPost = postInput.value;
    this.newPost = this.enteredValue;
  }
}
