export interface IResultItem {
    kind?: string;
    etag?: string;
    pageInfo?: PageInfo;
    items: Item[];
}
  
export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Item {
    kind?: string;
    etag?: string;
    id: string;
    snippet: ISnippet;
    statistics: IStatistics
}
  
interface IStatistics {
    viewCount: string;
    likeCount: string;
    dislikeCount?: string;
    favoriteCount: string;
    commentCount: string;
}

interface ISnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: ILocalized;
    defaultAudioLanguage: string;
}
  
export interface IThumbnails {
    [key: string]: IThumbData;
}
  
interface IThumbData {
    url: string;
    width: number;
    height: number;
}
  
interface ILocalized {
    title: string;
    description: string;
}