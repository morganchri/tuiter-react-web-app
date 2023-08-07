import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TuitStats from "./TuitStats"
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/tuits-reducer"
import {deleteTuitThunk} from "../services/tuits-thunks";
import {AiOutlineClose} from "react-icons/ai";
import "./index.css";

const TuitItem = (
	{
		tuit = {
			_id: 123,
			topic: "Akamai",
			userName: "Akamai",
			title: "Akamai announces earnings this week",
			time: "2h",
			image: "akamai.png" ,
			liked: true,
			replies: 123,
			retuits: 432,
			likes: 2345,
			handle: "@akamai",
			tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
		}
	}
) => {
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		// dispatch(deleteTuit(id));
		dispatch(deleteTuitThunk(id));
	}
	return(
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img width={70} className={"tuiter-avatar"} src={`/images/${tuit.image}`}
						 alt={"image"}/>
				</div>
				<div className="col-10">
					<div className="fw-bolder">{tuit.username} <i className="fas fa-check-circle "></i> {tuit.handle} . {tuit.time}</div>
					<div className="">{tuit.tuit}</div>
					<AiOutlineClose className="bi bi-x-lg float-end"
					   onClick={() => dispatch(deleteTuitThunk(tuit))}></AiOutlineClose>
					<TuitStats key={tuit._id} tuit={tuit}/>
				</div>
			</div>

		</li>
	);
};

export default TuitItem;