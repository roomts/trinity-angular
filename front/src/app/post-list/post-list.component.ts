import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  posts: Array<any>;
  post: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.post = {};
    this.postFindAll();
  }

  postFindAll(){
    this.apiService.getPostsList().subscribe(data => this.posts = data)
  }

  createPost(frm: FormGroup){
    this.apiService.createPost(this.post).subscribe(response =>{
      this.posts.push(response);
      alert("Cadastrado com sucesso!");
      this.display = false
    })
  }
}
