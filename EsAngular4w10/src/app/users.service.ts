import { User } from "./user";

export async function getUsers(): Promise<User[]> {
  return await (await fetch('http://localhost:3000/users')).json();
}

export class UserSerivice{

  user: User[] = []

  constructor() {}

  private getAllUsers() {
    return fetch("http://localhost:3000/users/").then((res): Promise<User[]> => res.json())
  }

  fetchData() {
    let p = this.getAllUsers()
    p.then(res => {
      this.user = res
    })
  }

  getDet(id:number){
  return fetch(`http://localhost:3000/users/${id}`).then((res): Promise<User> => res.json()).then(res => {
    console.log(res)
    return res
  })
}
}
