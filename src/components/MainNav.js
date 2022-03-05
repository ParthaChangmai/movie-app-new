import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TvIcon from "@mui/icons-material/Tv";

import { useHistory } from "react-router-dom";

export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);
	const history = useHistory();

	useEffect(() => {
		if (value === 0) history.push("/");
		else if (value === 1) history.push("/movies");
		else if (value === 2) history.push("/series");
	}, [value, history]);

	return (
		<Box
			sx={{
				width: "100%",
				position: "fixed",
				bottom: 0,

				zIndex: 100,
			}}
		>
			<BottomNavigation
				style={{
					color: "white",
					backgroundImage:
						"linear-gradient(to top, #0d428e, #233875, #282f5d, #272747, #222032)",
				}}
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					style={{ color: "white" }}
					label="Trending"
					icon={<WhatshotIcon />}
				/>
				<BottomNavigationAction
					style={{ color: "white" }}
					label="Movies"
					icon={<MovieCreationIcon />}
				/>
				<BottomNavigationAction
					style={{ color: "white" }}
					label="TV Series"
					icon={<TvIcon />}
				/>
			</BottomNavigation>
		</Box>
	);
}
