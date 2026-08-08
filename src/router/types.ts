import { Request, Response } from "express";
import { APIDefine } from "../types";

export type ApiHandler<T extends APIDefine<any, any>> =
  (
    req: Request<unknown, T['result'], T['param']>,
    res: Response<T['result']>
  ) => void | Promise<void>;

export type ApiParam<T> =
    T extends APIDefine<infer P, any> ? P : never;

export type ApiResult<T> =
    T extends APIDefine<any, infer R> ? R : never;

export type ApiFunc<T extends APIDefine<any, any>> =
    (param: ApiParam<T>) => Promise<ApiResult<T>>;
