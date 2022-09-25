import server from "./config";

const get = (url) => {
    return async (params = {}) => {
        return server.get(url, {params: params}).then((res) => {
            return res;
        });
    }
}

export default get;
