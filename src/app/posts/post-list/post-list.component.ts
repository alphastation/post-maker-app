import { Component, Input, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() posts: Post[] = [];
  // posts = [
  //   {
  //     title: 'This my dummy first post',
  //     content: 'This is my dummy forst post content',
  //   },
  //   {
  //     title: 'This my dummy second post',
  //     content: 'This is my dummy second post content',
  //   },
  //   {
  //     title: 'This my dummy third post',
  //     content: 'This is my dummy third   post content',
  //   },
  // ];
}
