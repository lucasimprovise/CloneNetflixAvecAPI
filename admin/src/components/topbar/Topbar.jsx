import "./topbar.css";

import { Language, NotificationsNone, Settings } from "@material-ui/icons";

import React from "react";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">NetflixAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
