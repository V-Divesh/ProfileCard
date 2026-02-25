import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import coverimg from "./asserts/whydigit_cover.jfif";
import profileimg from "./asserts/why_digit_system_private_limited_logo.jfif";

const Profile = () => {
  const [follow, setFollowing] = useState(true);
  const [followercount, setfollowercount] = useState(555);
  const [followingcount] = useState(0);
  const handleChangeButton = () => {
    setFollowing(!follow);
    if (follow === true) {
      setfollowercount(followercount + 1);
    }
    if (follow === false) {
      setfollowercount(followercount - 1);
    }
    console.log(follow);
  };
  return (
    <>
      <div className="profilecard">
        <div className="backgroundimg">
          <img
            src={coverimg}
            id="coverimg"
            width="400px"
            height="130px"
            alt="Why Digit Cover"
          />
          <img
            id="profileimg"
            src={profileimg}
            width="100px"
            alt="Why Digit Profile"
          />
        </div>
        <div className="heading">
          <div>
            <h1>WHY DIGIT</h1>
            <p>Encouraging Digital Culture</p>
          </div>
          <button onClick={handleChangeButton}>
            {follow ? "Follow" : "Following"}
          </button>
        </div>
        <div className="content">
          <p>
            Building Websites and Webapps with Seamless User Experience Across
            Devices.
          </p>
        </div>
        <div className="followcount">
          <p>{followingcount} Following</p>
          <p>{followercount} Followers</p>
        </div>
        <div className="footer">
          <a href="https://in.linkedin.com/company/whydigit" target="_blank" rel="noreferrer">
            WhyDigit.com
          </a>
          <div className="location">
            <CiLocationOn />
            <p>India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
