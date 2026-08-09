import { callOdbaApi } from "./http";

import {
    GetImageUrlApi,
    GetImageUrlRequest,
    GetImageUrlResponse,
    GetLinkableContentsApi,
    GetLinkableContentsRequest,
    GetLinkableContentsResponse,
    GetUncachedDataApi,
    GetUncachedDataRequest,
    GetUncachedDataResponse,
    LinkDataApi,
    LinkDataRequest,
    LinkDataResponse,
    RegistDataApi,
    RegistDataRequest,
    RegistDataResponse,
    RemoveDataApi,
    RemoveDataRequest,
    RemoveDataResponse,
    UnlinkDataApi,
    UnlinkDataRequest,
    UnlinkDataResponse,
    UpdateDataApi,
    UpdateDataRequest,
    UpdateDataResponse,
} from "../contract";

export const odba = {

    async registData(
        request: RegistDataRequest
    ): Promise<RegistDataResponse> {

        return callOdbaApi(RegistDataApi, request);
    },

    async updateData(
        request: UpdateDataRequest
    ): Promise<UpdateDataResponse> {

        return callOdbaApi(UpdateDataApi, request);
    },

    async removeData(
        request: RemoveDataRequest
    ): Promise<RemoveDataResponse> {

        return callOdbaApi(RemoveDataApi, request);
    },

    async unlinkData(
        request: UnlinkDataRequest
    ): Promise<UnlinkDataResponse> {

        return callOdbaApi(UnlinkDataApi, request);
    },

    async getUncachedData(
        request: GetUncachedDataRequest
    ): Promise<GetUncachedDataResponse> {

        return callOdbaApi(GetUncachedDataApi, request);
    },

    async linkData(
        request: LinkDataRequest
    ): Promise<LinkDataResponse> {

        return callOdbaApi(LinkDataApi, request);
    },

    async getImageUrl(
        request: GetImageUrlRequest
    ): Promise<GetImageUrlResponse> {

        return callOdbaApi(GetImageUrlApi, request);
    },

    async getLinkableContents(
        request: GetLinkableContentsRequest
    ): Promise<GetLinkableContentsResponse> {

        return callOdbaApi(GetLinkableContentsApi, request);
    },
};
