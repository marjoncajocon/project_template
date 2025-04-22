import { Http } from "../../plugin/core/core.mts";



const AppHttp = async (url, data = {}, progress = null, upload_progress = null) => {

    let local = localStorage.getItem("xauth");
    let xauth: string = '';

    if (local != null) {
        xauth = local.toString()
    }


    const http = new Http({
        url: `${url}`,
        method: "POST",
        header: {
            "Content-Type": "application/json",
            "X-Auth": xauth
        },
        body: data
    });

    if (typeof(progress) == "function") {
        http.Progress(progress);
    }

    if (typeof(upload_progress) == "function") {
        http.UploadProgress(upload_progress);
    }

    return await http.Load();
}

export default AppHttp;