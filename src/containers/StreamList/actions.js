import {
    FETCH_ONLINE,
    FETCH_ALL,
    ONLINE,
    OFFLINE,
    names,
    channels,
    streams
} from './constants';

import axios from 'axios';

export const fetchRecent = () => {
    return async dispatch => {
        try {
            const response = await fetch(ONLINE)
            const json = await response.json()
            dispatch({
                type: FETCH_ONLINE,
                payload: json
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_ONLINE_ERROR',
                payload: err
            });
        }
    }
}

export const fetchAlltime = () => {
    return async dispatch => {
        try {
            const response = await fetch(OFFLINE)
            const json = await response.json()
            dispatch({
                type: FETCH_ALL,
                payload: json
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_ALL_ERROR',
                payload: err
            });
        }
    }
}

export const fetchAllStreamers = () => {
        let chain = Promise.resolve();

        const streamers = [];

        names.forEach(function(name) {
            chain = chain
            .then(() => Promise.all([
                axios.get(channels+name),
                axios.get(streams+name),
            ])
            .then((stream) => {
            streamers.push(stream);
            }))
        });

        chain.then(() => {
            streamers.map(stream => {
            if (!stream[1].data.stream) {
                console.log(stream[0].data.name+' is offline');
            } else {
                console.log(stream[1].data.stream);
            }
        }
        )
    });        
        /*chain.then(() => {
            console.log(streamers);
            return streamers;
        });*/
    }

export const fetchOnline = () => {
        let chain = Promise.resolve();

        const streamers = [];

        names.forEach(function(name) {
            chain = chain
            .then(() => Promise.all([
                axios.get(channels+name),
                axios.get(streams+name),
            ])
            .then((stream) => {
                streamers.push(stream);
            }))
        }); 

        chain.then(() => {
            streamers.map(stream => {
                if (stream[1].data.stream) {
                    console.log(stream[1].data.stream);
                }
            }
            )
        });
    }

export const fetchOffline = () => {
        let chain = Promise.resolve();

        const streamers = [];

        names.forEach(function(name) {
            chain = chain
            .then(() => Promise.all([
                axios.get(channels+name), 
                axios.get(streams+name),       
            ])
            .then((stream) => {
                streamers.push(stream);
            }))
    }); 

        chain.then(() => {
            streamers.map(stream => {
            if (!stream[1].data.stream) {
                console.log(stream[0].data.name+' is offline');
            } 
        }
        )
    });

    }
        /*chain.then(() => {
            streamers.map(stream => {
                if (stream[1].data.stream) {
                    console.log(stream[1].data.stream);
                } else {
                    console.log('ok')
                }
            }
            )
        });*/
            /*if (streamers[2][1].data.stream) {
                console.log (streamers[2][1].data.stream);
            } else {
                console.log('happens');
            }
            console.log(streamers);*/

