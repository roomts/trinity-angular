import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  
})
export class PostDetailsComponent implements OnInit {

  post: any;
  comment: any;
  comments: any;
  

  getPostDetails(id) {
    this.apiService.getPost(id)
      .subscribe(data => {
        this.post = data;
      });
  }

  getCommentsListDetails(id) {
    this.apiService.getCommentsList(id)
      .subscribe(data => {
        this.comments = data;
      });
  }
 
  constructor( private route: ActivatedRoute, private apiService: ApiService ) { }

  ngOnInit() {
    this.comment = {};
    this.getPostDetails(this.route.snapshot.params['id']);
    this.getCommentsListDetails(this.route.snapshot.params['id']);
  }


  createPost(frm: FormGroup){
    this.comment.PostId = this.route.snapshot.params['id'];
    this.apiService.createComment(this.comment).subscribe(response =>{
      this.comments.push(response);
      alert("Cadastrado com sucesso!");
    })
  }

}
