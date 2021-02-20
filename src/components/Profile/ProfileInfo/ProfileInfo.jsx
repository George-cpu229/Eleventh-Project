import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div>
      <div>
      <img src='https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
         ava + descript.
      </div>
        </div>
        );
}

export default ProfileInfo;