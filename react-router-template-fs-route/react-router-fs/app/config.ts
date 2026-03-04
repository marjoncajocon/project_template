import { toast } from "sonner";

const server_url: string = 'http://localhost:5000';


const fetch_json = async (url: string, data: any = {}, o?: {}) => {
    let local = localStorage.getItem("xauth");
    let xauth: string = '';

    if (local != null) {
        xauth = local.toString()
    }

    try {
        const res = await fetch(server_url + url, {
            method: 'POST',
            headers: {
                'X-Auth': xauth,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        });

        return await res.json();
        
    } catch(e: any) {
        console.log(e);
        toast.error('No network connection!');
    }

};

export default server_url;

export {fetch_json};