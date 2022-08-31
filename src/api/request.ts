import server from "./config";

const get = (url) => {
    return async () => {
        return server.get(url).then((res) => {
            return res;
        });
    }
}

export default get;
