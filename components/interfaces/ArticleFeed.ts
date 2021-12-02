export interface IArticleFeedItem {
  userID: String; // to make userProfilePictureURL clickable
  userProfilePictureURL: String; //to display profile picture
  articleID: String; //to create link
  articleDateTime: String; // to calc when it was relative to now
  articleTitle: String; //to display topic of article
}
export interface IArticleFeed {
  title: String;
  articles: Array<IArticleFeedItem>;
}

export default IArticleFeed;
