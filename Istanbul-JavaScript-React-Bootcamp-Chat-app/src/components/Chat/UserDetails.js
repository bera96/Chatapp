import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { UserContext } from "../../context/UserContext";

function UserDetails({ clicked, onClickHandler }) {
  const { selectedUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={theme} className="user-details">
      <div className="details-close" onClick={onClickHandler}>
        X
      </div>
      <div className="user-details-container">
        <div
          style={{ background: "#ebebeb !important" }}
          className="user-detailed-image"
        ></div>
        <h4 className="user-details-name">
          {selectedUser.first_name + " "}
          {selectedUser.last_name}
        </h4>
        <div className="last-seen">Last seen 2 hours ago</div>

        <div className="user-contact">
          <div className="user-message">
            <div>Message</div>
            <div>
              <i class="far fa-comment"></i>
            </div>
          </div>
          <div className="user-call">
            <div>Call</div>
            <div>
              <i class="fas fa-phone-alt"></i>
            </div>
          </div>
          <div className="user-video">
            <div>Video</div>
            <div>
              <i class="fas fa-video"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
