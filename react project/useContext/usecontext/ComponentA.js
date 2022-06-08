import React, { useContext } from 'react'
import { UserContext, ChannelContext } from './../../App'

const ComponentA = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      ComponentA:=
      {user} - {channel}
    </div>
  )
}

export default ComponentA