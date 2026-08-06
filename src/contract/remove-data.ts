import { APIDefine, CommonParam } from "../types";
import { DataId } from "../types-common/common-types";

export const RemoveDataApi = {
    uri: 'remove-data',
    method: 'post',
    resultType: 'json',
} as APIDefine<RemoveDataRequest, boolean>;

export type RemoveDataRequest = CommonParam & {
    id: DataId;
}

export type RemoveDataResponse = boolean;
