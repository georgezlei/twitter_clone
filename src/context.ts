import * as React from 'react';

import {User, Tweet} from './data_types';
import {currentUser} from './data_source';

const TwitterContext = React.createContext({
  currentUser,
  tweets: Array<Tweet>(),
  trends: [],
  addTweet: (text: string): void => {}
});

export default TwitterContext;