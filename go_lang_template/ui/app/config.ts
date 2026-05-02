import axios from "axios";
import { toast } from "sonner";

//const server_url: string = '';
const server_url: string = 'http://localhost:5000';


class Network {
    controller: AbortController;
    constructor() {
        this.controller = new AbortController();
    }

    public abort() {
        this.controller.abort();
    }

    public fetch_json = async (url: string, data: any = {}, signal?: AbortSignal) => {
        let local = localStorage.getItem("xauth");
        let xauth: string = '';

        if (local != null) {
            xauth = local.toString()
        }

        try {
            const res = await axios(server_url + url, {
                signal: signal != undefined ? signal : this.controller.signal,
                method: 'POST',
                headers: {
                    'X-Auth': xauth,
                    'Content-Type': 'application/json' 
                },
                data: JSON.stringify(data)
            });

            return await res.data;
            
        } catch(e: any) {
            console.log(e);
            // toast.error('No network connection!');

        return await new Promise((resolve) => {
                resolve({
                    ok: false,
                    data: 'No network connection!'
                });
        });
        }

    };

    public fetch_buffer = async (url: string, data: any = {}, signal?: AbortSignal) :Promise<ArrayBuffer> => {

        let local = localStorage.getItem("xauth");
        let xauth: string = '';

        if (local != null) {
            xauth = local.toString()
        }

        try {
        
            const res = await axios(server_url + url, {
                signal: signal != undefined ? signal : this.controller.signal,
                responseType: 'arraybuffer',
                method: 'POST',
                headers: {
                    'X-Auth': xauth,
                    'Content-Type': 'application/json' 
                },
                data: JSON.stringify(data),
                onDownloadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        console.log(percent); // optional progress
                    }

                    // console.log(progressEvent.loaded);

                }
            });

            return await res.data;
            
        } catch(e: any) {
            console.log(e);
            // toast.error('No network connection!');

            return await new Promise((resolve) => {
                    resolve(new ArrayBuffer());
            });
        }

    };

    public fetch_form = async (url: string, data: FormData, signal?: AbortSignal) => {

        let local = localStorage.getItem("xauth");
        let xauth: string = '';

        if (local != null) {
            xauth = local.toString()
        }

        try {

            const res = await axios(server_url + url, {
                signal: signal != undefined ? signal : this.controller.signal,
                responseType: 'json',
                method: 'POST',
                headers: {
                    'X-Auth': xauth
                },
                data: data,
                onDownloadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        console.log(percent); // optional progress
                    }

                    // console.log(progressEvent.loaded);
                }
            });

            return await res.data;
            
        } catch(e: any) {
            // if (axios.isCancel(e) || e.code === "ERR_CANCELED") {
            //     console.log("Request aborted");
            //     return { ok:false, data:"aborted" };
            // }

            // console.log(e);

            // return {
            //     ok:false,
            //     data:"No network connection!"
            // };

            return await new Promise((resolve) => {
                resolve({
                    ok:false,
                    data:"No network connection!"
                });
            });
        }

    };


}

class FetchQueue {
  private queue: (() => Promise<any>)[] = []
  private running = 0
  private max = 6
  private controllers: Set<AbortController> = new Set()

  constructor(max = 6) {
    this.max = max
  }

  add(task: (signal: AbortSignal) => Promise<any>) {
    return new Promise((resolve, reject) => {

      const controller = new AbortController()
      this.controllers.add(controller)

      this.queue.push(async () => {
        try {
          const result = await task(controller.signal)
          resolve(result)
        } catch (e) {
          reject(e)
        } finally {
          this.controllers.delete(controller)
        }
      })

      this.next()
    })
  }

  private next() {
    if (this.running >= this.max) return

    const task = this.queue.shift()
    if (!task) return

    this.running++

    task().finally(() => {
      this.running--
      this.next()
    })
  }

  abortAll() {
    this.controllers.forEach(c => c.abort())
    this.controllers.clear()
    this.queue = []
  }
}

export default server_url;

export {Network, FetchQueue};