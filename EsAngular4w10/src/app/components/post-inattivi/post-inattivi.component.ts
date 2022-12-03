import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    this.posts = this.postSrv.getPostFiltrati(false)
  }

  attiva(id:number) {
    this.postSrv.attivaDB(id).then(ok=>{
      if(ok) this.posts = this.posts.filter(e=>!(e.id==id))
      else console.log("ERRORE THEN");

    })
    // this.postSrv.attivaService(id)
    // this.posts = this.posts.filter(e=>!(e.id==id))
  }

}
