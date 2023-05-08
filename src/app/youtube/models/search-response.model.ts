import { PageInfo, IThumbnails } from './search-item.model';

export interface IResponseItem {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}

interface Item {
    kind: string;
    etag: string;
    id: IdItem;
    snippet: ISnippet;
}

interface IdItem {
    kind: string;
    videoId: string;
}

interface ISnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}