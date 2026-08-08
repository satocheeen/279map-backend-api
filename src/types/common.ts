import { MapKind } from "../types-common/common-types";

export type CurrentMap = {
    mapId: string;
    mapKind: MapKind;
}
export type CommonParam = {
    currentMap: CurrentMap;
}

/**
 * API interface
 */
export type APIDefine<PARAM, RESULT> = {
    uri: string;
    method: 'post' | 'get';
    resultType: 'json' | 'blob' | 'string' | 'none';
    param: PARAM;
    result: RESULT;
}

export type ApiParam<T> =
    T extends APIDefine<infer PARAM, any> ? PARAM : never;

export type ApiResult<T> =
    T extends APIDefine<any, infer RESULT> ? RESULT : never;

export type ApiFunc<T extends APIDefine<any, any>> = (
    param: ApiParam<T>
) => Promise<ApiResult<T>>;
