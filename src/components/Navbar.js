import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser,faFilePen,faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';



const Navbar = ({ isAuth }) => {
	return (
		<nav>
			<Link to="/">
				<FontAwesomeIcon icon={faHouseUser} />
				ホーム
			</Link>

			{!isAuth
				? (
					<Link to="/login">
						<FontAwesomeIcon icon={faArrowRightToBracket} />
						ログイン
					</Link>
				) : (
					<>
						<Link to="/createPost">
							<FontAwesomeIcon icon={faFilePen} />
							記事投稿
						</Link>
						<Link to="/logout">
							<FontAwesomeIcon icon={faArrowRightToBracket} />
							ログアウト
						</Link>
					</>
				)}
		</nav>
	);
};

export default Navbar;