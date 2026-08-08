import { APIDefine } from '../types';

export type ApiParam<T> =
    T extends APIDefine<infer PARAM, any> ? PARAM : never;

export type ApiResult<T> =
    T extends APIDefine<any, infer RESULT> ? RESULT : never;

export type ApiFunc<T extends APIDefine<any, any>> = (
    param: ApiParam<T>
) => Promise<ApiResult<T>>;