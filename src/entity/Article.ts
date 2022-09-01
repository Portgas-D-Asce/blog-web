import { Tag } from "./Tag";

class Article {
  //博文 id
  public id: number;
  //博文 name
  public name: string;
  //博文 描述
  public description: string;
  //博文 内容
  public content: string;
}

class Abstract {
  public id: number;
  public name: string;
  public description: string;
  public tags: Array<Tag>;
  public time: string;
  public readed: number;
  public commoned: number;
  public upvoted: number;
  public downvoted: number;
}

class Articles {
    //分类 or 标签 id
    public id: number;
    //分类 or 标签 name
    public name: string;
    //分类 or 标签 description
    public description: string;
    //摘要列表
    public abstracts: Array<Abstract>;
}
  
export { Abstract, Article, Articles };