import { Link } from "react-router-dom";
import { HOME } from '../../routes/consts.ts';
import { Logo } from '../Logo';
import { HamburgerMenu } from '../HamburgerMenu';
import { LinkButton } from '../LinkButton';
import { DISCORD_INVITE_LINK, GITHUB_LINK, GITLAB_LINK } from '../../consts/external_links.ts';
import githubLogo from "../../assets/icons/github-logo.svg";
import gitlabLogo from "../../assets/icons/gitlab-logo.svg";

export const MobileTop = () => {
  return (
    <div className="relative">
      <div className="mx-6 pt-2 pb-5 flex justify-between">
        <Link to={HOME}>
          <a>
            <Logo size={60} />
          </a>
        </Link>
        <div className="flex space-x-2">
          <a
            target="_blank"
            href={GITHUB_LINK}
            rel="noopener noreferrer"
            className="pt-[13px]"
          >
            <img src={githubLogo} alt="" width={35} height={35} />
          </a>
          <a
            target="_blank"
            href={GITLAB_LINK}
            rel="noopener noreferrer"
            className="pt-[13px]"
          >
            <img src={gitlabLogo} alt="" width={35} height={35} />
          </a>
        </div>
        <HamburgerMenu />
      </div>
      <div>
        <h1 className="font-robotoMono font-medium text-4xl text-center mb-2">
          Order of Devs<br/>Community
        </h1>
        <div className="flex justify-center items-center mb-[34px]">
          <LinkButton
            to={DISCORD_INVITE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-[#12A04E] text-white w-44 rounded-md"
          >
            Join Discord <br />
            Order of Devs
          </LinkButton>
        </div>
        <p className="font-montserrat text-[#535353] text-xs text-center px-4">
          Our dynamic IT learning community aims to become the best in the future, with access to the highest-quality training available on the market.
        </p>
      </div>
    </div>
  );
};
