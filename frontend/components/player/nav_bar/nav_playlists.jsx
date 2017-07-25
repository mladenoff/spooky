import React from 'react';

import Loading from '../../loading';

class NavPlaylists extends React.Component {
  constructor(props) {
  super(props);
  }

  componentWillMount() {
    this.props.requestUserPlaylists(this.props.currentUser.id);
  }

  render() {
    const { tracks } = this.props;
    if (this.props.fetching === true) {
      return <Loading />;
    }

    return (
      <div className="nav-playlists">
        Your playlists ought to be here.
      </div>
    );
  }
}

export default NavPlaylists;
