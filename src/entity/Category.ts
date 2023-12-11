class Categories {
    public id: number;
    public name: string;
    public description: string;
    public children: Array<Categories>;
}

export default Categories;
