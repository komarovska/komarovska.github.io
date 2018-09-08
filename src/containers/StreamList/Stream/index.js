import React, { Component } from 'react';


import { fetchAllStreamers } from '../actions';

import {
  StreamRow,
  Logo,
  TableCell
} from '../styles.js';

export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamers: [],
    };
  }
      
    render() {
      return (
        <div>
          {this.state.streamers.map(stream => <StreamRow className='row'> 
            <TableCell className='col-xs-2'><Logo src={`${stream.logo}`} alt='oops!'/></TableCell>
            <TableCell className='col-xs-3 channel-name'>
            <a href={`https://www.twitch.tv/${stream.display_name}`}>
            {stream.display_name}</a></TableCell>
            <TableCell className='col-xs-7 stream-name'>{stream.game}: {stream.status}</TableCell>
          </StreamRow>)}
        </div>
        
      )
  }
}