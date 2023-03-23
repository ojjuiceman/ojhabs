import React from 'react'


const UserProfile = (props) => {
  return (
    <div>
        <h1>Personal Information</h1>
        <ul className="profile-list">
          {
            props.data.map (content =>(
              <li>
                <span><strong>ID:</strong> {content.PROVIDER_NAME}</span>
               \
              </li>
            ))
          }
        </ul>
    </div>
  );
}

export default UserProfile;