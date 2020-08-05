import * as React from 'react';
import {useParams} from 'react-router-dom';

import TwitterContext from '../context';

export default () => {
  const {tweetID} = useParams();
  const {tweets, currentUser} = React.useContext(TwitterContext);

  const tweet = tweets.find((t) => t.id === tweetID);

  return (
    <div></div>
  )
}