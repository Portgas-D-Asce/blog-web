import server from "./config";

const get = async (url = '', params = {}) => {
    return server.get(url, {params: params}).then((res) => {
        return res;
    });
}

const put = async (url = '', params = {}) => {
    return server.put(url, {params: params}).then((res) => {
        return res;
    });
}

export {
    get,
    put
}
