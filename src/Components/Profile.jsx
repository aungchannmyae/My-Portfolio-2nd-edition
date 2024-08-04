import React, { useContext } from 'react'
import { GeneralContext } from '../Context/GeneralProvider'

const Profile = () => {
  const {profile, setProfile} = useContext(GeneralContext);
  return (
    <section className={` ${ !profile && " hidden"} `}>
      <div>
        Profile
      </div>
    </section>
  )
}

export default Profile