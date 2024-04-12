import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">

						<li className="social__item">
							<a href="https://www.instagram.com/feniiiiiiks" target="blank"  >
								<img src={instagram} alt="Link" />
							</a>
						</li>

						<li className="social__item">
							<a href="https://github.com/cort17" target="blank">
								<img src={gitHub} alt="https://github.com/cort17" />
							</a>
						</li>
						<li className="social__item">
							
								<img src={linkedIn} alt="Link" />
							
						</li>
					</ul>
					<div className="copyright">
						<p>© 2024 ALEXANDER develop</p>
					</div>
				</div>
			</div>
		</footer>
		);
}

export default Footer;