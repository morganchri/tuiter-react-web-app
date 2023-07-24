import React from "react";
import "./who-to-follow.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const WhoToFollowListItem = (
    {
        who = { userName: '', handle: '', avatarIcon: '' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt="avatar"/>
                </div>
                <div className="col-8 wd-who-to-follow-text-padding">
                    <div className="fw-bold"> &nbsp; {who.userName}  <i className="fas fa-check-circle"></i></div>
                    <div> &nbsp; @{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;