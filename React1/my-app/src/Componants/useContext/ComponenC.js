import React, { useContext } from 'react';
import { channelContext, userContext } from '../../App'

const ComponenC = () => {
   const user = useContext(userContext);
   const channel=channelContext(userContext)
    return (
        <div>
            <p>Heyy i'm ComponentC</p>
            {user}
            {channel}
        </div>
    )
}

export default ComponenC
