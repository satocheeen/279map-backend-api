import { APIDefine, CommonParam } from "../types";
import { DataId } from "../types-common/common-types";

export const UnlinkDataApi = {
    uri: 'unlink-data',
    method: 'post',
    resultType: 'none',
} as APIDefine<UnlinkDataRequest, void>;

export type UnlinkDataRequest = CommonParam & {
    id: DataId;
    parent: DataId;
    fieldKey: string;  // parentのこのフィールドからのリンクを解除する
}

export type UnlinkDataResponse = void;
