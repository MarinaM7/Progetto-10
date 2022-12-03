import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService} from '../../post.service'

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {


  posts:Post[] = []

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    // this.postSrv.getPostFiltrati(true).then(res=>this.posts=res)
    this.posts = this.postSrv.getPostFiltrati(true)
  }

  disattiva(id:number){
    this.postSrv.disattivaDB(id).then(ok=>{
      if(ok) this.posts = this.posts.filter(e=>!(e.id==id))
      else console.log("ERRORE THEN");

    })
  }
}
