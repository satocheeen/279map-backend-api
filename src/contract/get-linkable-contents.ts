import { APIDefine, CommonParam } from "../types";

export const GetLinkableContentsApi = {
    uri: 'get-linkable-contents',
    method: 'post',
    resultType: 'json',
} as APIDefine<CommonParam, GetLinkableContentsResponse>;

export type GetLinkableContentsRequest = CommonParam;

export type GetLinkableContentsResponse = {
    contents: {
        datasourceId: string;
        name: string;
    }[];
}
