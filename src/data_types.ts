export interface Tweet {
    created_at: string,
    id: number,
    id_str: string,
    text: string,
    source?: string,
    truncated?: boolean,
    in_reply_to_status_id?: number,
    in_reply_to_status_id_str?: string,
    in_reply_to_user_id?: number,
    in_reply_to_user_id_str?: string,
    in_reply_to_screen_name?: string,
    user: User,
    geo?: string,
    coordinates?: string,
    place?: string,
    contributors?: string,
    retweeted_status?: Tweet,
    is_quote_status?: boolean,
    quoted_status_id?: number,
    quoted_status_id_str?: string,
    quoted_status?: Tweet,
    quote_count?: number,
    reply_count?: number,
    retweet_count?: number,
    favorite_count?: number,
    entities?: Entities,
    favorited?: boolean,
    retweeted?: boolean,
    filter_level?: string,
    possibly_sensitive?: boolean,
    lang?: string,
    matching_rules?: any[]
}

export interface User {
  id: number,
  id_str: string,
  name: string,
  screen_name: string,
  location?: string,
  url?: string,
  description: string,
  translator_type?: string,
  protected?: boolean,
  verified?: boolean,
  followers_count: number,
  friends_count: number,
  listed_count: number,
  favourites_count: number,
  statuses_count: number,
  created_at: string,
  utc_offset?: string,
  time_zone?: string,
  geo_enabled?: boolean,
  lang?: string,
  contributors_enabled?: boolean,
  is_translator?: boolean,
  is_translation_enabled?: boolean,
  profile_background_color: string,
  profile_background_image_url: string,
  profile_background_image_url_https: string,
  profile_background_tile: boolean,
  profile_link_color: string,
  profile_sidebar_border_color: string,
  profile_sidebar_fill_color: string,
  profile_text_color: string,
  profile_use_background_image: boolean,
  has_extended_profile?: boolean,
  profile_image_url: string,
  profile_image_url_https: string,
  profile_banner_url?: string
  default_profile: boolean,
  default_profile_image: boolean,
  following: string,
  follow_request_sent: string,
  notifications: string,
  entities?: UserEntities
}

export interface QuotedStatusPermalink {
  url: string,
  expanded: string,
  display: string,
}

export interface Entities {
  hashtags?: Hashtag[],
  media?: Media[],
  urls?: URL[],
  user_mentions?: UserMention[],
  symbols?: any[]
  polls?: any[]
}

export interface UserEntities {
  url?: Entities,
  description: Entities,
}
export interface Hashtag {
  text: string,
  indices: number[]
}

export interface URL {
  url: string,
  expanded_url: string,
  display_url: string,
  indices: number[]
}

export interface UserMention {
  id: number,
  id_str: string,
  name: string,
  screen_name: string,
  indices: number[]
}

export interface Media {
  url: string,
  display_url: string,
  expanded_url: string,
  id: number,
  id_str: string,
  indices: number[],
  media_url: string,
  media_url_https: string,
  sizes: MediaSizes,
  source_status_id: number,
  source_status_id_str: string,
  type: string
}

export interface MediaSizes {
  thumb: MediaSize,
  large: MediaSize,
  medium: MediaSize,
  small: MediaSize
}

export interface MediaSize {
  h: number,
  w: number,
  resize: string,
}

export interface Trend {
  name: string,
  url: string,
  promoted_content: string,
  query: string,
  tweet_volume: number
}