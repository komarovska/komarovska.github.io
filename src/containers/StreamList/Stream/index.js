import React, { Component } from 'react';

import axios from 'axios';

import {
  StreamRow,
  Logo,
  TableCell
} from '../styles.js';

export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [],
      b: [],
      streamers: [],
      streams: [],
      names: [
        "ESL_SC2", 
        "OgamingSC2", 
        "cretetion", 
        "freecodecamp", 
        "storbeck", 
        "habathcx", 
        "RobotCaleb", 
        "noobs2ninjas"
      ]
    };
  }


    componentDidMount() {
      this.state.names.map(streamer =>
      axios.get(`https://wind-bow.glitch.me/twitch-api/streams/${streamer}`)
        .then(res => {
          const streamers = this.state.a.push(res.data);
          this.setState({ streamers });
        })
      ),

      this.state.names.map(streamer => 
      axios.get(`https://wind-bow.glitch.me/twitch-api/channels/${streamer}`)
        .then(res => {
          const streams = this.state.b.push(res.data);
          this.setState({ streams });
        })
      )
    }
      
    render() {

    return (
      <div>
        {/*this.state.names.map(streamer => <StreamRow>
          <td><a href={`https://wind-bow.glitch.me/twitch-api/channels/${streamer}`}>{streamer}</a></td>
        </StreamRow>)}
        {this.state.a.map(channel => <tr> 
          <td>{channel._links.channel} </td>
        </tr>)*/}
        {this.state.b.map(stream => <StreamRow className='row'> 
          <TableCell className='col-xs-2'><Logo src={`${stream.logo}`} alt='oops!'/></TableCell>
          <TableCell className='col-xs-3 channel-name'>
          <a href={`https://www.twitch.tv/${stream.display_name}`}>
          {stream.display_name}</a></TableCell>
          <TableCell className='col-xs-7 stream-name'>{stream.game}: {stream.status}</TableCell>
        </StreamRow>)}
      </div>
      
    )

    /* 
    render() {
    const { campersList } = this.props;
    const campers = campersList.map((camper, index) => {
      return (
        <Camper camper={camper} key={camper.username} position={++index} />
      );
    });
    return (
      <table className='table table-striped table-bordered main'>
        <TableHeader />
        <tbody>
          {campers}
        </tbody>
      </table>
    );
  }
  */
  }
}