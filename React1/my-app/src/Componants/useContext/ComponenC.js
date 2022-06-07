import React, { useContext } from 'react';
import { userContext } from '../../App'

const ComponenC = () => {
   const user = useContext(userContext);
    return (
        <div>
            <p>Heyy i'm ComponentC</p>
            {user}
        </div>
    )
}

export default ComponenC
