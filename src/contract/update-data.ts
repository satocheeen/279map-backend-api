import { APIDefine, CommonParam } from "../types";
import { ContentValueMapInput, DataId, GeoProperties } from "../types-common/common-types";

export const UpdateDataApi = {
    uri: 'update-data',
    method: 'post',
    resultType: 'json',
} as APIDefine<UpdateDataRequest, UpdateDataResponse>;

export type UpdateDataRequest = CommonParam & {
    target: {
        type: 'dataId',
        id: DataId;
    } | {
        type: 'originalId',
        originalId: string;
    };
    item?: {
        geometry: GeoJSON.Geometry;
        geoProperties: GeoProperties;
    } | null;   // nullの場合、item削除
    contents?: ContentValueMapInput;
}

export type UpdateDataResponse = boolean;
