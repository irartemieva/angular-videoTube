import { createAction, createReducer, props } from '@ngrx/store';
import { Item } from '../youtube/models/search-item.model';
import { ICard } from '../admin/models/custom-card.model';

export const getVideos = createAction(
    '[Main page] Search Results',
    props<{videos: Item[]}>()
);

export const resetVideos = createAction(
    '[Main page] Reset Results'
);

export const createCustomCards = createAction(
    '[Admin page] Create a card',
    props<{customCards: ICard[]}>()
)

export const getCustomCards = createAction(
    '[Main page] Get custom cards',
    // props<{customCards: ICard[]}>()
)