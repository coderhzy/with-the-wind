import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import * as React from 'react';


export type UnstyledLinkProps = {
    href: string;
    children: React.ReactNode;
    openNewTab?: boolean;
    className?: string;
    nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
    ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
        const isNewTab =
            openNewTab !== undefined
                ? openNewTab
                : href && !href.startsWith('/') && !href.startsWith('#');

        if (!isNewTab) {
            return (
                <Link
                    href={href}
                    {...nextLinkProps}
                    ref={ref}
                    {...rest}
                    className={className}
                >
                    {children}
                </Link>
            );
        }

        return (
            <a
                ref={ref}
                target='_blank'
                rel='noopener noreferrer'
                href={href}
                {...rest}
                className={clsx('cursor-pointer', className)}
            >
                {children}
            </a>
        );
    }
);

UnstyledLink.displayName = 'UnstyledLink';

export default UnstyledLink;