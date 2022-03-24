import { Pagination } from "@mui/material";
import React from "react";

const CustomPagination = ({ setPage, numofPages = 10 }) => {
	const handlePageChange = (page) => {
		setPage(page);
		window.scroll(0, 0);
	};

	return (
		<div>
			<Pagination
				onChange={(e) => handlePageChange(e.target.textContent)}
				count={numofPages}
				color="primary"
				style={{
					color: "white",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					marginTop: 10,
					marginBottom: 10,
				}}
				hideNextButton
				hidePrevButton
			/>
		</div>
	);
};

export default CustomPagination;
