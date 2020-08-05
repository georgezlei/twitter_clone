import * as React from 'react';
import './NavBar.scss';
import TwitterContext from '../context';

const NavBar = () => {
  const {currentUser} = React.useContext(TwitterContext);
  const accountPopupRef = React.useRef();
  const {name, screen_name, profile_image_url} = currentUser;

  const showAccountPopup = (): void => {
    const accountPopup = accountPopupRef.current as HTMLDivElement;
    accountPopup.style.display = 'block';
  }

  const hideAccountPopup = (): void => {
    const accountPopup = accountPopupRef.current as HTMLDivElement;
    accountPopup.style.display = 'none';
  }

  return (
    <header>
      <div className="menu">
        <div>
          <div><div><i className="fab fa-twitter"></i></div><span></span></div>
          <div><div><i className="fas fa-home"></i></div><span>Home</span></div>
          <div><div><i className="fas fa-search"></i></div><span>Explore</span></div>
          <div><div><i className="far fa-bell"></i></div><span>Notifications</span></div>
          <div><div><i className="far fa-envelope"></i></div><span>Messages</span></div>
          <div><div><i className="far fa-bookmark"></i></div><span>Bookmarks</span></div>
          <div><div><i className="far fa-list-alt"></i></div><span>Lists</span></div>
          <div><div><i className="far fa-user"></i></div><span>Profile</span></div>
          <div><div><i className="fas fa-ellipsis-h"></i></div><span>More</span></div>
          <div className="circle-bg">
            <div className="new-tweet-icon">
              <div className="bg"></div>
              <i className="fas fa-plus-circle"></i>
            </div>
            <div className="new-tweet-button">Tweet</div>
          </div>
        </div>
        <div className="avatar" onClick={showAccountPopup}>
          <div className="icon"><img src={profile_image_url} /></div>
          <div className="name">
            <div className="display-name">{name}</div>
            <div className="id">{screen_name}</div>
          </div>
          <div className="chevron"><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
        </div>
      </div>
      <div id="account-popup" ref={accountPopupRef}>
        <div className="bg-mask" onClick={hideAccountPopup}></div>
        <div className="profile">
          <div>
            <div className="avatar"><div style={{backgroundImage: `url(${profile_image_url})`}}></div></div>
            <div className="name">
              <div className="display-name">{name}</div>
              <div className="id">{screen_name}</div>
            </div>
          </div>
          <div className="status"><i className="fas fa-check"></i></div>
        </div>
        <div className="menu">
          <div>Add an existing account</div>
          <div>Log out</div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;