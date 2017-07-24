import React from 'react';
import {Loading} from '../../../loading';

class Playlists extends React.Component {
  constructor(props) {
  super(props);
  }

  componentWillMount() {
    this.props.requestAllPlaylists();
  }

  render() {
    const { playlists } = this.props;
    if (this.props.loading === true) {
      return <Loading />;
    }

    return (
      <div className="playlists">
        <h3 className="view-header">ALL PLAYLISTS</h3>
        <ul className="playlists-list">
            {playlists.map((playlist, idx) =>
              (<PlaylistItem key={playlist.id}
                playlist={playlist}
                playlists={playlists}
                idx={idx}/>))}
        </ul>
      </div>
    );
  }
}

export default Playlists;
