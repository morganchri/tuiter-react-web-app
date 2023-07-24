import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    const icons = [<i className="fa fa-home"></i>,
                   <i className="fa fa-hashtag wd-icon-buffer"></i>,
                   <i className="fa fa-bell wd-icon-buffer"></i>,
                   <i className="fa fa-envelope wd-icon-buffer"></i>,
                   <i className="fa fa-bookmark wd-icon-buffer"></i>,
                   <i className="fa fa-list wd-icon-buffer"></i>,
                   <i className="fa fa-user wd-icon-buffer"></i>,
                   <i className="fas fa-circle wd-icon-buffer"></i>]

    // https://stackoverflow.com/questions/32937181/javascript-es6-map-multiple-arrays
    const linkIcons = links.map((x, i) => [x, icons[i]]);

    return (
        <div className="list-group">
            {linkIcons.map((link) =>
                           <Link to={`${link[0]}`} className={`list-group-item text-capitalize ${active === link[0] ? "active" : ""}`}>
                               <div>
                                   {link[1]}

                                   {"  " + link[0]}
                               </div>
                           </Link>
            )}

        </div>
    );
};
export default NavigationSidebar;