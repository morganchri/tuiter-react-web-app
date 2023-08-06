import React from "react";
import {useDispatch} from "react-redux";
import {addLikes, subtractLikes} from "../reducers/tuits-reducer"
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStats = (
	{
		tuit = {
			_id: 345,
			topic: "College Tuition",
			userName: "Northeastern",
			title: "Northeastern University announces 200% increase in tuition due to the rising costs of college coaching staff",
			time: "4d",
			image: "northeastern.jpg",
			liked: false,
			disliked: false,
			replies: 123,
			retuits: 432,
			likes: 2345,
			dislikes: 666,
			handle: "@neu",
			tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
		}
	}
) => {

	const dispatch = useDispatch();
	// const likeClick = (id, tuit) => {
	// 		if (tuit.liked === true) {
	// 			dispatch(subtractLikes(id))
	// 		} else {
	// 			dispatch(addLikes(id))
	// 		}
	// 	}


	return (
		<div className={"row"}>
			<div className={"col-2"}>
				<i className="far fa-comment fa-lg"></i>
				&nbsp; {tuit.replies}
			</div>
			<div className={"col-2"}>
				<i className="fa fa-retweet fa-lg"></i>
				&nbsp; {tuit.retuits}
			</div>
			<div className={"col-2"}>

				<i className={tuit.liked ? "fas fa-heart fa-lg liked-format" : "far fa-heart fa-lg"} onClick={() => {
					tuit.liked ? dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1, liked: false})) : dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}));
				}}></i>

				&nbsp; {tuit.likes}

			</div>
			<div className={"col-2"}>
				<i className={tuit.disliked ? "fas fa-thumbs-down fa-lg disliked-format" : "far fa-thumbs-down fa-lg"} onClick={() => {
					tuit.disliked ? dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes - 1, disliked: false})) : dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1, disliked: true}));
				}}></i>

				&nbsp; {tuit.dislikes}
			</div>
			<div className={"col-2"}>
				<i className="far fa-share-square fa-lg"></i>
			</div>
		</div>
	)
};

export default TuitStats;