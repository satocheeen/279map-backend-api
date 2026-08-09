import {
    RegistDataApi,
    UpdateDataApi,
    RemoveDataApi,
    UnlinkDataApi,
    GetUncachedDataApi,
    LinkDataApi,
    GetImageUrlApi,
    GetLinkableContentsApi,
} from '../api';

import { Express, Request, Response } from 'express';
import { Logger } from 'log4js';

import { APIDefine } from '../types';

export type ApiParam<T> =
    T extends APIDefine<infer PARAM, any> ? PARAM : never;

export type ApiResult<T> =
    T extends APIDefine<any, infer RESULT> ? RESULT : never;

export type ApiFunc<T extends APIDefine<any, any>> = (
    param: ApiParam<T>,
    logger?: Logger,
) => Promise<ApiResult<T>>;

export function createApiRouter(
    app: Express,
    logger?: Logger,
) {
    const register = <T extends APIDefine<any, any>>(
        api: T,
        func: ApiFunc<T>,
    ) => {
        const execute = async (
            req: Request,
            res: Response,
        ) => {
            try {
                const param = (
                    api.method === 'post'
                        ? req.body
                        : req.query
                ) as ApiParam<T>;

                logger?.info('[start] ' + api.uri, param);

                const result = await func(param, logger);

                logger?.info('[end] ' + api.uri);
                logger?.debug('result', result);

                if (result === undefined) {
                    // undefinedを返すと、main-serverが結果を受信できないため
                    res.send('complete');
                } else if (typeof result === 'number') {
                    // 数値をそのままsendするとstatusCodeとして扱われるため
                    res.send(String(result));
                } else {
                    res.send(result);
                }
            } catch (e) {
                logger?.warn(api.uri + ' error', e);
                res.status(500).send(e);
            }
        };

        if (api.method === 'post') {
            app.post('/' + api.uri, execute);
        } else {
            app.get('/' + api.uri, execute);
        }
    };

    return {
        registDataApi: (
            func: ApiFunc<typeof RegistDataApi>
        ) => register(RegistDataApi, func),

        updateDataApi: (
            func: ApiFunc<typeof UpdateDataApi>
        ) => register(UpdateDataApi, func),

        removeDataApi: (
            func: ApiFunc<typeof RemoveDataApi>
        ) => register(RemoveDataApi, func),

        unlinkDataApi: (
            func: ApiFunc<typeof UnlinkDataApi>
        ) => register(UnlinkDataApi, func),

        getUncachedDataApi: (
            func: ApiFunc<typeof GetUncachedDataApi>
        ) => register(GetUncachedDataApi, func),

        linkDataApi: (
            func: ApiFunc<typeof LinkDataApi>
        ) => register(LinkDataApi, func),

        getImageUrlApi: (
            func: ApiFunc<typeof GetImageUrlApi>
        ) => register(GetImageUrlApi, func),

        getLinkableContentsApi: (
            func: ApiFunc<typeof GetLinkableContentsApi>
        ) => register(GetLinkableContentsApi, func),
    };
}
