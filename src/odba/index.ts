import { callOdbaApi } from "./http";

import {
    RegistDataApi,
    RegistDataRequest,
    RegistDataResponse
} from "../contract/regist-data";

// import {
//     UpdateDataApi,
//     UpdateDataRequest,
//     UpdateDataResponse
// } from "../contract/update-data";

// import {
//     UploadImageApi,
//     UploadImageRequest,
//     UploadImageResponse
// } from "../contract/upload-image";

export const odba = {

    async registData(
        request: RegistDataRequest
    ): Promise<RegistDataResponse> {

        return callOdbaApi(RegistDataApi, request);
    },

    // async updateData(
    //     request: UpdateDataRequest
    // ): Promise<UpdateDataResponse> {

    //     return callOdbaApi(UpdateDataApi, request);
    // },

    // async uploadImage(
    //     request: UploadImageRequest
    // ): Promise<UploadImageResponse> {

    //     return callOdbaApi(UploadImageApi, request);
    // }
};