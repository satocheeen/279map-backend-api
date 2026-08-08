// router/register.ts

import { APIDefine } from "../types";
import { Express } from 'express';
import { ApiFunc, ApiHandler, ApiParam } from "./types";


export function post<T extends APIDefine<any, any>>(
    app: Express,
    api: T,
    func: ApiFunc<T>,
) {
    app.post('/' + api.uri, async (req, res) => {
        try {
            const param = req.body as ApiParam<T>;

            const result = await func(param);

            if (result === undefined) {
                res.send('complete');
            } else {
                res.send(result);
            }
        } catch (e) {
            res.status(500).send(e);
        }
    });
}
