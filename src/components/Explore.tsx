import * as React from 'react';
import "./Explore.scss";
import TwitterContext from '../context';
import {Trend} from '../data_types';

export default () => {
  const {trends} = React.useContext(TwitterContext);
  return (
    <div className="explore">
      <div className="search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="whats-happening">
        <div className="caption">What's Happening?</div>
        {trends.slice(0, 5).map((trend: Trend) => {
          return (
            <div className="link" key={trend.name}>
              <div>
                <div className="category">Trending</div>
                <div className="title">
                  {trend.name}
                </div>
                <div className="tweets-number">{trend.tweet_volume ? `${trend.tweet_volume} tweets` : ''}</div>
              </div>
              <div className="image">
              </div>
            </div>
          );
        })}
        <div className="show-more">Show more</div>
      </div>
    </div>
  );
}