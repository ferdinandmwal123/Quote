import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  numberOfUpvotes: number = 0;
  numberOfDownvotes: number = 0;

 upVotesButtonClick() {
   this.numberOfUpvotes++;
 }
downVotesButtonClick() {
  this.numberOfDownvotes++;
}
voteUp(){

}
voteDown(){
  
}



  constructor() { }

  ngOnInit() {
  }

}
