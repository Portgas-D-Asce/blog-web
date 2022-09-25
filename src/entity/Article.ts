import { Tag } from "./Tag";

class Abstract {
  public id: number;
  public name: string;
  public description: string;
  public tags: Array<Tag>;
  public date: string;
  public read: number;
  public commoned: number;
  public upvoted: number;
  public downvoted: number;
}

export { Abstract };