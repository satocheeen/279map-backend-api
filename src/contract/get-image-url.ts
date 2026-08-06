import { APIDefine, CommonParam } from "../types";
import { DataId } from "../types-common/common-types";

export const GetImageUrlApi = {
    uri: 'get-imageurl',
    method: 'post',
    resultType: 'string',
} as APIDefine<GetImageUrlRequest, string|undefined>;

export type GetImageUrlRequest = CommonParam & {
    id: DataId;
}

export type GetImageUrlResponse = string | undefined;
