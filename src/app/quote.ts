export class Quote {
    showAuthor: boolean;
    upvotes: number;
    downvotes: number;
  constructor(public id: number, public quote: string, public author: string, public user: string, public completeDate: Date,
              upvotes: number, downvotes: number) {
    this.showAuthor = false;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }
  upVote() {
    this.upvotes++;
  }
  downVote() {
    this.downvotes++;
  }
}
