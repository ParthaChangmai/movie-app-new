import React from "react";
import { img_300, unavailable } from "../../Config/config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";
import ContentModal from "../contentModal/ContentModal";

const SingContent = ({ id, poster, title, date, media_type, vote_average }) => {
	return (
		<ContentModal media_type={media_type} id={id}>
			<Badge
				badgeContent={vote_average}
				color={vote_average > 6 ? "success" : "secondary"}
			></Badge>
			<img
				className="poster"
				src={poster ? `${img_300}/${poster}` : unavailable}
				alt={title}
			/>

			<b className="title">{title}</b>
			<span className="subTitle">
				{media_type === "tv" ? "TV Series" : "Movie"}
				<span className="subTitle">{date}</span>
			</span>
		</ContentModal>
	);
};

export default SingContent;
