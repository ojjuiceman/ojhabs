import * as React from 'react'
import StarRating from "./StarRating.jsx"




const UserProfile = (props) => {
  return (
    <div>
        <h1>New York Rehabs</h1>
        <ul className="profile-list">
          {
            props.data.map (content =>(
              <li>
                <span><strong>ID:</strong> {content._id.$oid}</span>
                <StarRating />
              
              </li>
            ))
          }
        </ul>
    </div>
  );
}

export default UserProfile;