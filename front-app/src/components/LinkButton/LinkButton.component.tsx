import { Link } from "react-router-dom";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export type LinkButtonProps = {
    to: string;
    target?: HTMLAttributeAnchorTarget;
    rel?: string;
    className?: string;
    children?: ReactNode;
};

export const LinkButton = ({ to, target, rel, className, children }: LinkButtonProps) => {
    return (
        <Link to={to} target={target} rel={rel}>
            <button className={className}>{children}</button>
        </Link>
    );
};
