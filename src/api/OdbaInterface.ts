import { CurrentMap } from "../types";
import { DataId } from "../types-common/common-types";
import { OdbaAPIFunc } from "./api-initializer";
import { GetImageUrlRequest, GetLinkableContentsResponse, GetUncachedDataRequest, GetUncachedDataResponse, LinkDataRequest, RegistDataRequest, RemoveDataRequest, UnlinkDataRequest, UpdateDataRequest } from "../contract";

export type UpdateContentLinkCacheParam = {
    currentMap: CurrentMap;
    contentId: DataId;
    parent: {
        itemId: DataId;
    } | {
        contentId: DataId;
    }
}

export default abstract class OdbaInterface {
    abstract registData: (param: RegistDataRequest) => Promise<DataId>;

    abstract updateData: (param: UpdateDataRequest) => Promise<boolean>;

    abstract removeData: (param: RemoveDataRequest) => Promise<boolean>;

    abstract getUncachedData: OdbaAPIFunc<GetUncachedDataRequest, GetUncachedDataResponse>;

    /**
     * 指定のコンテンツをアイテムまたは親コンテンツに紐づける。
     * ODBの更新、キャッシュDBの更新を行う。
     */
    abstract linkData: (param: LinkDataRequest) => Promise<void>;

    /**
     * 指定のコンテンツについてアイテムまたは親コンテンツとの接続を解除する。
     * ODBの更新、キャッシュDBの更新を行う。
     */
    abstract unlinkData: (param: UnlinkDataRequest) => Promise<void>;

    abstract getImageUrl: (param: GetImageUrlRequest) => Promise<string | undefined>;

    abstract getLinkableContents: (currentMap: CurrentMap) => Promise<GetLinkableContentsResponse>;
}
