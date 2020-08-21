import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import TwitterContext from './context';
import {Tweet, User} from './data_types';
import {tweets as rawTweets, currentUser, trends} from './data_source';

import "./index.scss";
import NavBar from './components/NavBar';
import Home from './components/Home';

const IndexPage = () => {
    const [tweets, setTweets] = React.useState(rawTweets);
    const initVal = {
        currentUser,
        tweets,
        trends,
        addTweet: (text: string): void => {
            const newTweet = createFakeTweet(currentUser, text);
            setTweets([newTweet, ...tweets]);
        }
    };

    return (
        <BrowserRouter>
            <TwitterContext.Provider value={initVal}>
                <NavBar />
                <Switch>
                    <Route path="/detail/:tweetId">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </TwitterContext.Provider>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <IndexPage />,
    document.getElementById("root")
);

const createFakeTweet = (user: User, text: string): Tweet => {
    const uuid = Date.now();
    return {
        created_at: Date().toString(),
        id: uuid,
        id_str: uuid.toString(),
        text,
        source: "\u003ca href=\"https:\/\/mobile.twitter.com\" rel=\"nofollow\"\u003eTwitter Web App\u003c\/a\u003e",
        truncated: false,
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user,
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        quote_count: 0,
        reply_count: 0,
        retweet_count: 0,
        favorite_count: 0,
        entities: {
          hashtags: [],
          urls: [],
          user_mentions: [],
          symbols: []
        },
        favorited: false,
        retweeted: false,
        filter_level: "low",
        lang: "en",
        matching_rules: [
          {
            "tag": null
          }
        ]
      };
}