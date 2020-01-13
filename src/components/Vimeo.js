import React from 'react';

export const Vimeo = (props) => {
    return (<div>
        <div style={{padding:"56.25% 0 0 0", position: "relative"}}>
            <iframe style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} src={props.video} width="640" height="360" frameborder="0" allow="autoplay; fullscreen"></iframe> 
        </div>
    </div>);
}