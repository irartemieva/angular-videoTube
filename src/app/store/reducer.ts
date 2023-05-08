import { createReducer, on } from "@ngrx/store";
import { ICard } from "../admin/models/custom-card.model";
import { Item } from "../youtube/models/search-item.model";
import * as VideoActions from './actions';

export const initialState: Item[] = [];

export const initialCardState: ICard[] = [];

export const videosReducer = createReducer(
    initialState,
    on(VideoActions.getVideos, (state, {videos}) => videos),
    on(VideoActions.resetVideos, (state) => [])
)


export const cardReducer = createReducer(
    initialCardState,
    on(VideoActions.createCustomCards, (state, {customCards}) => ([...state, ...customCards])),
)