import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)
    
    if (!user)  return <h2>Please login to view profile</h2>

    return (
    <div>
        <h2>Profile</h2>
        <p>Username: {user.username}</p> 
    </div>
  )
}

export default Profile