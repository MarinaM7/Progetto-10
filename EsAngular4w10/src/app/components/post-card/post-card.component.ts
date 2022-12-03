import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postSrv:PostService) { }

  ngOnInit(): void {

  }

  eliminaArticolo(id:number) {
    this.postSrv.eliminaPost(id)
  }

  @Input() p!:Post




}
