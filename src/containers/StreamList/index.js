import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, selectSortingType } from './selectors';
import { fetchRecent } from './actions';
import Stream from './Stream';
import TableHeader from './TableHeader';

import {
  
} from './styles.js';

class StreamList extends Component {

  componentDidMount = () => {
    this.props.onFetchRecent();
  }

  render() {
    const { StreamsList } = this.props;
    const Streams = StreamsList.map((Stream, index) => {
      return (
        <Stream Stream={Stream} key={Stream.username} position={++index} />
      );
    });
    return (
      <div>
        <TableHeader />
        <Stream />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  StreamsList: selectStreams()
});

const mapDispatchToProps = {
  onFetchRecent: fetchRecent
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);