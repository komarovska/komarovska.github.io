import { FETCH_ALLTIME } from './constants';
import { FETCH_RECENT } from './constants';

const initialState = {
    Streams: [],
    sortingType: 'recent'
};

const StreamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALLTIME:
            return { ...state, Streams: action.payload, sortingType: 'alltime' };

        case FETCH_RECENT:
            return { ...state, Streams: action.payload, sortingType: 'recent' };

        default:
            return state;
    }
}


export default StreamsReducer;