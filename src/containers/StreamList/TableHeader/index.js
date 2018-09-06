import React, { Component } from 'react';
/*import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSortingType } from '../selectors';
import { fetchRecent, fetchAlltime } from '../actions';*/

import {
  List,
  Title, 
  Indicator,
  Circle,
} from '../styles.js';
import { 
  lightBrown, 
  lightGreen,
  lightBlue, 
} from '../constants';

class TableHeader extends Component {

  /*sortStreams = (filter) => {
    if (filter !== this.props.StreamsSortingType) {
      if (filter === 'recent') {
        this.props.onFetchRecent();
      } else {
        this.props.onFetchAllTime();
      }
    }
  }

  handleSort = (fieldName) => type => {
    if (!type.target.classList.contains('sorted')) {
      let element = document.getElementsByClassName('sorted').item(0);
      element.className = 'text-center clickable col-md-3';
      type.target.className = 'text-center sorted clickable col-md-3';
      this.sortStreams(fieldName);
    } 
  }*/

  render() {

    return (
    //const { StreamsSortingType } = this.props;
      <List className='row'>
          <Title className='text-center col-xs-9'>TWITCH STREAMERS</Title>
          <Title className='col-xs-3'>
            <Indicator className='animate-indicator'>
              <Circle style={{ backgroundColor: lightBrown }}></Circle>
              all
            </Indicator>
            <Indicator className='animate-indicator'>
              <Circle style={{ backgroundColor: lightGreen }}></Circle>
              online
            </Indicator>
            <Indicator className='animate-indicator'>
              <Circle style={{ backgroundColor: lightBlue }}></Circle>
              offline
            </Indicator>
            </Title> 
          {/*<th className='text-center col-md-9'><Title>Nickname</Title></th>
          <th className='text-center col-md-3'>M</th>
          <th className='text-center 
          sorted clickable col-md-3' onClick={this.handleSort('recent')}>Points in past 30 days</th>
          <th className='text-center clickable col-md-3' onClick={this.handleSort('alltime')}>All time points</th> */}
      </List>
      );
    }
  }
  

/*const mapStateToProps = createStructuredSelector({
  StreamsSortingType: selectSortingType()
});

const mapDispatchToProps =  {
  onFetchRecent: fetchRecent,
  onFetchAllTime: fetchAlltime
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);*/

export default TableHeader;