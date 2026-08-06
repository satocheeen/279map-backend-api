/**
 * Odba container's API interface.
 *
 * @deprecated API contracts have moved to files under src/contract.
 */

export {
    UpdateDataApi as OdbaUpdateDataAPI,
    type UpdateDataRequest as OdbaUpdateDataParam,
    type UpdateDataResponse as OdbaUpdateDataResponse,
} from '../contract/update-data';
export {
    RemoveDataApi as OdbaRemoveDataAPI,
    type RemoveDataRequest as OdbaRemoveDataParam,
    type RemoveDataResponse as OdbaRemoveDataResponse,
} from '../contract/remove-data';
export {
    UnlinkDataApi as OdbaUnlinkDataAPI,
    type UnlinkDataRequest as OdbaUnlinkDataParam,
    type UnlinkDataResponse as OdbaUnlinkDataResponse,
} from '../contract/unlink-data';
export {
    GetUncachedDataApi as OdbaGetUncachedDataAPI,
    type GetUncachedDataRequest as OdbaGetUncachedDataParam,
    type GetUncachedDataResponse as OdbaGetUncachedDataResult,
} from '../contract/get-uncached-data';
export {
    LinkDataApi as OdbaLinkDataAPI,
    type LinkDataRequest as OdbaLinkDataParam,
    type LinkDataResponse as OdbaLinkDataResponse,
} from '../contract/link-data';
export {
    GetImageUrlApi as OdbaGetImageUrlAPI,
    type GetImageUrlRequest as OdbaGetImageUrlParam,
    type GetImageUrlResponse as OdbaGetImageUrlResponse,
} from '../contract/get-image-url';
export {
    GetLinkableContentsApi as OdbaGetLinkableContentsAPI,
    type GetLinkableContentsRequest as OdbaGetLinkableContentsParam,
    type GetLinkableContentsResponse as OdbaGetLinkableContentsResult,
} from '../contract/get-linkable-contents';
export {
    RegistDataApi as OdbaRegistDataAPI,
    type RegistDataRequest as OdbaRegistDataParam,
    type RegistDataResponse as OdbaRegistDataResponse,
} from '../contract/regist-data';
