import { APIDefine, CommonParam } from "../types";
import { DataId } from "../types-common/common-types";

/**
 * link content to item
 */
export const LinkDataApi = {
    uri:'link-data',
    method: 'post',
    resultType: 'none',
} as APIDefine<LinkDataRequest, void>;

export type LinkDataRequest = CommonParam & ({
    type: 'dataId',
    id: DataId;
} | {
    type: 'originalId',
    originalId: string;
}) & {
    parent: DataId;
    fieldKey?: string;  // 指定されている場合、ここで指定したフィールドにリンク追加する。未指定の場合は、追加可能なフィールドにリンク追加する。
}

export type LinkDataResponse = void;
