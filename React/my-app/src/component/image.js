import React from 'react';
import pic from '../images/img1.jpg';
function displayImage(){
    return(
        <div>
            <img src={pic} alt="" height={200} width={300}/>
        </div>
    )
}


export default displayImage;
