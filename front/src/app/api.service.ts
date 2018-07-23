import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:2000/post/';
  private baseUrlComments = 'http://localhost:2000/post/comments';

  constructor(private http: HttpClient) { 
  }
  getPost(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPost(post: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, post);
  }
 
  updatePost(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getPostsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCommentsList(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrlComments}/${id}`);
  }

  createComment(comment: Object): Observable<Object> {
    return this.http.put(`${this.baseUrlComments}`, comment);
  }
 
}

