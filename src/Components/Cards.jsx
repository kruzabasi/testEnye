import React from "react";

//define the UI of individual cards with specified properties
//props passed from CardList component
class Card extends React.Component {
  render() {
    const profile = this.props;
    const firstName = profile.FirstName;
    const lastName = profile.LastName;
    return (
      <div className="user-profile">
        <div className="thumbnail">
          {firstName.slice(0, 1)}/{lastName.slice(0, 1)}
        </div>
        <div className="info">
          <div className="name">
            👤 {firstName} {lastName}
          </div>
          <div className="username">@{profile.UserName}</div>
          <div className="email">📧 {profile.Email}</div>
          <div className="phone">📞 {profile.PhoneNumber}</div>
          <div className="location">
            📍 {profile.Latitude}, {profile.Longitude}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
