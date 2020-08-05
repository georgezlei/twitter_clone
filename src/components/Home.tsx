import * as React from 'react';
import Explore from './Explore';
import './Home.scss';
import TwitterContext from '../context';
import {Tweet, User, URL, Media} from '../data_types';

const TweetComponent = ({tweet}: {tweet: Tweet}) => {

  const isRetweet = tweet.retweeted_status != null;
  const retweetedBy = isRetweet ? tweet.user.name : null;
  if (isRetweet) tweet = tweet.retweeted_status;
  const {name, screen_name, profile_image_url} = tweet.user;

  const timePast = (time: string): string => {
    const then = Date.parse(time);
    const now = Date.now();
    const diffInMs = now - then;
    const diffInMinute = Math.round(diffInMs / 60000);
    const diffInHour = Math.round(diffInMinute / 60);
    const diffInDay = Math.round(diffInHour / 24);
    const diffInMonth = Math.round(diffInDay / 30);
    const diffInYear = Math.round(diffInDay / 365);
    return diffInYear ? `${diffInYear} year${diffInYear > 1 ? 's' : ''} ago` : 
            diffInMonth ? `${diffInMonth} month${diffInMonth > 1 ? 's' : ''} ago` :
            diffInDay ? `${diffInDay} day${diffInDay > 1 ? 's' : ''} ago` :
            diffInHour ? `${diffInHour} hour${diffInHour > 1 ? 's' : ''} ago` :
            `${diffInMinute} minute${diffInMinute > 1 ? 's' : ''} ago`;
  }

  const handleAction = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const target = e.target as HTMLDivElement;
    const parent = target.parentElement;
    const grandParent = parent.parentElement;
    const matchId = (id: string):boolean =>
        (target.id === id || parent.id === id || grandParent.id === id);

    if (matchId('comment')) {
      // setComments(comments + 1);
    } else if (matchId('retweet')) {
      // setRetweets(retweets + 1);
    } else if (matchId('like')) {
      // setLikes(likes + 1);
    }
  }

  const URLComponent = ({urls}: {urls: URL[]}) => {
    return (
      <div className="entity url"></div>
    )
  }

  const MediaComponent = ({media}: {media: Media[]}) => {
    return (
      <div className="entity">
        <img src={media[0].media_url_https}></img>
      </div>
    )
  } 

  const QuotedStatus = ({status}: {status: Tweet}) => {
    return (
      <div className="entity quoted">
        <div className="headline">
          <div className="avatar"><div style={{backgroundImage: `url(${status.user.profile_image_url_https}`}}></div></div>
          <div className="name">{status.user.name}</div>
          <div className="screen-name">@{status.user.screen_name}</div>
          <span className="separator">·</span>
          <span className="time"><time dateTime={tweet.created_at}>{timePast(status.created_at)}</time></span>
        </div>
        <div className="text">{status.text}</div>
      </div>
    )
  }

  return (
    <article>
      {isRetweet ?
      <div className="retweet-info">
        <i className="fas fa-retweet"></i>
         <span>{retweetedBy} Retweeted</span> 
      </div> : ''}
      <div className="main">
        <div className="avatar">
          <div className="icon" style={{backgroundImage: `url(${profile_image_url})`}}></div>
        </div>
        <div className="content">
          <div className="info">
            <div>
              <span className="display-name">{name}</span>
              <span className="id">@{screen_name}</span>
              <span className="separator">·</span>
              <span className="time"><time dateTime={tweet.created_at}>{timePast(tweet.created_at)}</time></span>
            </div>
            <div><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
          </div>
          <div className="text">{tweet.text}</div>
          { tweet.quoted_status ? <QuotedStatus status={tweet.quoted_status}></QuotedStatus>
            : tweet.entities?.urls?.length ?  <URLComponent urls={tweet.entities.urls}></URLComponent>
            : tweet.entities?.media?.length ? <MediaComponent media={tweet.entities.media}></MediaComponent>
            : ''
          }
          <div className="actions">
            <div>
              <div id="comment" onClick={handleAction}><i className="far fa-comment"></i></div>
              <span>{tweet.reply_count || ''}</span>
            </div>
            <div>
              <div id="retweet" onClick={handleAction}><i className="fas fa-retweet"></i></div>
              <span>{tweet.retweet_count || ''}</span>
            </div>
            <div>
              <div id="like" onClick={handleAction}><i className="far fa-heart"></i></div>
              <span>{tweet.favorite_count || ''}</span>
            </div>
            <div><div><i className="far fa-share-square"></i></div></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default () => {
  const {currentUser, tweets, trends, addTweet} = React.useContext(TwitterContext);
  const [newTweetIntact, setNewTweetIntact] = React.useState(true);
  const newTweetContentRef = React.useRef();
  
  const handleNewTweetChange = (e: React.FormEvent<HTMLDivElement>):void => {
    const target = e.target as HTMLDivElement;
    const value = target.textContent;
    if (value.length) {
      setNewTweetIntact(false);
    } else {
      setNewTweetIntact(true);
    }
  }

  const sendNewTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    const inputBox = newTweetContentRef.current as HTMLDivElement;
    const text = inputBox.textContent;
    addTweet(text);
    inputBox.textContent = '';
  }

  return (
    <main className='home'>
      <div className="tweets">
        <div className="header">Home</div>
        <div className="input">
          <div className="avatar">
            <div className="photo" style={{backgroundImage: `url(${currentUser.profile_image_url})`}}></div>
          </div>
          <div className="right">
            <div>
              {newTweetIntact ? <div className="default-text">What's happening?</div> : ''}
              <div className="input-box" ref={newTweetContentRef} contentEditable="true" onInput={handleNewTweetChange}></div>
            </div>
            <div className="actions">
              <div className="media">
                <div><i className="far fa-images"></i></div>
                <div><i className="fas fa-film"></i></div>
                <div><i className="fas fa-chart-bar"></i></div>
                <div><i className="far fa-smile"></i></div>
                <div><i className="far fa-calendar-alt"></i></div>
              </div>
              <button disabled={newTweetIntact} onClick={sendNewTweet}>Tweet</button>
            </div>
          </div>
        </div>
        {tweets.map((t: Tweet) => <TweetComponent key={t.id_str} tweet={t} />)}
        <article className="last"></article>
      </div>
      <Explore></Explore>
    </main>
  )
}