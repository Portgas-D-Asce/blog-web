class Meting {
    public server: string;
    public type: string;
    public id: string;
    public set_server(server: string) {
        this.server = server;
    }
    public set_type(type: string) {
        this.type = type;
    }
    public set_id(id: string) {
        this.id = id;
    }
}

export default Meting;