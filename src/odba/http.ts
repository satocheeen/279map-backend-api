import axios, { AxiosResponse } from 'axios';
import { APIDefine } from '../types';

export async function callOdbaApi<API extends APIDefine<any,any>>(api: API, param: API['param']): Promise<API['result']> {
    const url = `http://${process.env.ODBA_SERVICE_HOST}:${process.env.ODBA_SERVICE_PORT}/${api.uri}/`;
    try {
        let res: AxiosResponse;
        if (api.method === 'get') {
            res = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: param,
                timeout: 60000,
            });
        } else {
            res = await axios.post(url, param, {
                timeout: 60000,
            });
        }
        if (res.status !== 200) {
            throw `odba return errir response: ${res.status} ${res.statusText} ${res.data}`;
        }
        const result = res.data;

        return result as API['result'];
    
    } catch (e) {
        throw 'connecting server failed:' + url + e;
    }
}
