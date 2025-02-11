import { Http } from "../../plugin/core/core.js";

const AppHttp = async (url, data = {}, progress = null, upload_progress = null) => {
    const http = new Http({
        url: `${url}`,
        method: "POST",
        header: {
            "Content-Type": "application/json",
            "X-Auth": localStorage.getItem("xauth")
        },
        body: data
    });

    if (typeof(progress) == "function") {
        http.progress(progress);
    }

    if (typeof(upload_progress) == "function") {
        http.upload_progress(upload_progress);
    }

    return await http.load();
}

export default AppHttp;