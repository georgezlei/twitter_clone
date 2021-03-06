import {Tweet, User, Trend} from './data_types';
import rawTweets from '../static/tweets_data.json';
import rawTrends from '../static/trends.json';

export const tweets = rawTweets as Array<Tweet>;
export const trends = rawTrends[0].trends as Array<Trend>;

export const currentUser: User = {
  "id": 2244994945,
  "id_str": "2244994945",
  "name": "Twitter Dev",
  "screen_name": "TwitterDev",
  "location": "127.0.0.1",
  "url": "https:\/\/developer.twitter.com\/en\/community",
  "description": "The voice of the #TwitterDev team and your official source for updates, news, and events, related to the #TwitterAPI.",
  "translator_type": "regular",
  "protected": false,
  "verified": true,
  "followers_count": 509196,
  "friends_count": 1998,
  "listed_count": 1591,
  "favourites_count": 2165,
  "statuses_count": 3575,
  "created_at": "Sat Dec 14 04:35:55 +0000 2013",
  "utc_offset": null,
  "time_zone": null,
  "geo_enabled": true,
  "lang": null,
  "contributors_enabled": false,
  "is_translator": false,
  "profile_background_color": "FFFFFF",
  "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
  "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
  "profile_background_tile": false,
  "profile_link_color": "0084B4",
  "profile_sidebar_border_color": "FFFFFF",
  "profile_sidebar_fill_color": "DDEEF6",
  "profile_text_color": "333333",
  "profile_use_background_image": false,
  "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/1283786620521652229\/lEODkLTh_normal.jpg",
  "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/1283786620521652229\/lEODkLTh_normal.jpg",
  "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/2244994945\/1594913664",
  "default_profile": false,
  "default_profile_image": false,
  "following": null,
  "follow_request_sent": null,
  "notifications": null
}