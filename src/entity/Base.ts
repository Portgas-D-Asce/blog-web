class Base {
    public id: number;
    public name: string;
    public description: string;
    public set_name(name: string) {
        this.name = name;
    }
    public set_description(description: string) {
        this.description = description;
    }
}

export default Base;
