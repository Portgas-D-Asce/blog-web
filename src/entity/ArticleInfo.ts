import TagInfo from "./TagInfo";

class ArticleInfo {
  public id: number;
  public name: string;
  public description: string;
  public tags: Array<TagInfo>;
  public time: string;
  public readed: string;
  public commoned: string;
  public upvoted: string;
  public downvoted: string;
}

export default ArticleInfo;
