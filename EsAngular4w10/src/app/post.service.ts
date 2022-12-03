import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = []

  constructor() {}

  private getAllPosts() {
    return fetch("http://localhost:3000/posts/").then((res): Promise<Post[]> => res.json())
  }

  fetchData() {
    let p = this.getAllPosts()
    p.then(res => {
      this.posts = res
    })
  }

  getPostFiltrati(a: boolean): Post[] {
    let newArray = this.posts.filter((e) => {
      return e.active == a
    })
    return newArray
  }

  attivaDB(id:number) {
    let postAttivato = this.posts.find((e)=>e.id==id)
    if(postAttivato == undefined) {
      throw new Error("Elemento non trovato")
    }
    postAttivato.active = true
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postAttivato)
    }).then(res=>{
      if(res.ok){
        this.attivaService(id)
        return true
      } else {
        throw new Error("Attivazione fallita")
      }
    }).catch(err=>{
      console.log("ERRORE", err);
    })
  }
  disattivaDB(id:number) {
    let postEliminato = this.posts.find((e)=>e.id==id)
    if(postEliminato == undefined) {
      throw new Error("Elemento non trovato")
    }
    postEliminato.active = false
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postEliminato)
    }).then(res=>{
      if(res.ok){
        this.disattivaService(id)
        return true
      } else {
        throw new Error("Attivazione fallita")
      }
    }).catch(err=>{
      console.log("ERRORE", err);
    })
  }

  attivaService(id:number) {
    this.posts = this.posts.map((e)=> e.id == id ? {...e, active: true} : e)
  }

  disattivaService(id:number) {
    this.posts = this.posts.map((e)=> e.id == id ? {...e, active: false} : e)
  }

  eliminaPost(id:number) {
    return fetch("http://localhost:3000/posts/"+id, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res=>{
      if(res.ok){
        this.delArray(id)
        return true
      } else {
        throw new Error("Attivazione fallita")
      }
    }).catch(err=>{
      console.log("ERRORE", err);
    })

  }

  delArray(id:number){
    this.posts = this.posts.splice(id,1)
    console.log(this.posts)
  }

  getDet(id:number){
    return fetch(`http://localhost:3000/posts/${id}`).then((res): Promise<Post> => res.json()).then(res => {
      console.log(res)
      return res
    })
  }
}
