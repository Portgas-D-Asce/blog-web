class Tag {
    //标签 id
    public id: number;
    //标签 name
    public name: string;
    //标签 description
    public description: string;
}

class Tags {
    public list: Array<Tag>;
}

export { Tag, Tags};
