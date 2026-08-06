import { APIDefine, CommonParam } from "../types";

/**
 * get uncached data
 * 指定のデータソースIDに関して、キャッシュDBに未登録のデータを取得する
 */
export const GetUncachedDataApi = {
    uri: 'get-unpointdata',
    method: 'post',
    resultType: 'json',
} as APIDefine<GetUncachedDataRequest, GetUncachedDataResponse>;

export type GetUncachedDataRequest = CommonParam & {
    dataSourceId: string;
    nextToken?: string;
    keyword?: string;
}

export type GetUncachedDataResponse = {
    contents: {
        originalId: string;
        title: string;
        overview?: string;
        hasImage?: boolean;
    }[],
    nextToken?: string;
};
