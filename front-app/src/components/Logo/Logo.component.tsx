import oodLogo from "../../assets/ood-logo.png";

export type LogoProps = {
  size: number;
};

export const Logo = ({ size }: LogoProps) => {
  return <img
    src={oodLogo}
    alt="Order of Devs logo"
    width={size}
    height={size}
    className="rounded-full"
  />;
};
