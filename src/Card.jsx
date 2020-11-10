import React from "react";
import TimerIcon from '@material-ui/icons/Timer';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
const Card=(props)=>{
return(
    <>
<div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.src} className="card-img" alt={props.src}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <hr/>
        <div className="d-flex mb-2  flex-md-row ">
        <h6><TimerIcon/>Free Sessions Available</h6>
        <div className="ml-5">
        <h6><SubtitlesIcon/>Geek,French,English</h6></div>
        </div>
        <p className="card-text">{props.about}</p>
        <div className="d-flex mt-2 ">
        <button type="button" class="btn btn-secondary">{props.button1}</button>
        <div className="ml-5">
        <button type="button" class="btn btn-secondary">{props.button2}</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
)
}
export default Card;