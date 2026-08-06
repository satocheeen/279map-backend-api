import { APIDefine, CommonParam } from "../types";
import { ContentValueMapInput, DataId, GeoProperties } from "../types-common/common-types";

export const RegistDataApi = {
    uri: 'regist-data',
    method: 'post',
    resultType: 'string',
} as APIDefine<RegistDataRequest, DataId>;

export type RegistDataRequest = CommonParam & {
    dataSourceId: string;   // 登録先データソース
    item?: {
        geometry: GeoJSON.Geometry;
        geoProperties: GeoProperties;
    };
    contents?: ContentValueMapInput;
    linkItems?: {
        id: DataId;
        fieldKey?: string;
    }[];   // 既存のアイテムに紐づける場合に指定
}

export type RegistDataResponse = string;
