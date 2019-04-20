import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    return(
        <div>
            <ProfileInfo userInfo={props}/>
            {/*<MyTopics/>*/}
        </div>
    );
}

export default Profile;