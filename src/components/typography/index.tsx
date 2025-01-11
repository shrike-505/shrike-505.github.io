import { PropsWithChildren } from 'react'
import { classnames } from '../../lib/classnames'

import RedactedOtf from '../../assets/fonts/redacted/otf/RedactedScript-Bold.otf'
import RedactedTtf from '../../assets/fonts/redacted/ttf/RedactedScript-Bold.ttf'
import RedactedWoff2 from '../../assets/fonts/redacted/woff/RedactedScript-Bold.woff2'
import InkFree from '../../assets/fonts/main/InkFree.ttf'
import LXGWWenkai from '../../assets/fonts/main/LXGWWenkai.ttf'
import { TbExternalLink } from 'react-icons/tb'

export const Description = ({ children }: PropsWithChildren) => (
    <>
        <div className="description">{children}</div>
        <style jsx>{`
            .description {
                display: block;
                padding: 1em;
            }
        `}</style>
    </>
)

export const DescriptionTitle = ({
    children,
    fontSize,
    smallCaps,
}: PropsWithChildren<{ fontSize?: string; smallCaps?: boolean }>) => (
    <>
        <h2
            className={classnames({
                'description-title': true,
                'small-caps': smallCaps,
            })}
        >
            {children}
        </h2>
        <style jsx>{`
            .description-title {
                border-bottom: 0.15rem solid #777;
                display: inline-block;
                font-size: ${fontSize || '1.5em'};
                font-weight: 300;
                line-height: 1.5em;
                margin: 0;
                padding: 0;
            }

            .small-caps {
                font-variant: small-caps;
            }
        `}</style>
    </>
)

export const Dimmed = ({ children }: PropsWithChildren) => (
    <>
        <span className="dimmed">{children}</span>
        <style jsx>{`
            .dimmed {
                opacity: 0.8;
            }
        `}</style>
    </>
)

export const Paragraph = ({
    children,
}: PropsWithChildren) => (
    <>
        <p className="paragraph">{children}</p>
        <style jsx>{`
            .paragraph {
                font-size: 1.2em;
                font-weight: 300;
                line-height: 1.2em;
            }
        `}</style>
    </>
)

export const Quotation = ({
    children,
}: PropsWithChildren) => (
    <>
        <blockquote className="quotation">
            <p>{children}</p>
        </blockquote>
        <style jsx>{`
            .quotation {
                background:rgba(249, 249, 249, 0.71);
                border-left: 10px solid #ccc;
                margin: 1.5em 10px;
                padding: 0.5em 10px;
                color: #666;
            }
            .quotation:before {
                color: #ccc;
                content: open-quote;
                font-size: 3em;
                line-height: 0.1em;
                margin-right: 0.25em;
                vertical-align: -0.4em;
            }
            .quotation p {
                display: inline;
            }
        `}</style>
    </>
)

export const ExternalLink = ({ children, href, color }: PropsWithChildren<{ href: string, color?: string }>) => (
    <>
        <a className="ext-link" href={href} rel="noopener noreferrer" target="_blank">
            {children}
            <span className="external-link-icon">
                <TbExternalLink />
            </span>
        </a>
        <style jsx>{`
            .ext-link {
                color: ${color ?? 'inherit'};
            }

            .external-link-icon {
                font-size: 0.75em;
                margin-left: 0.5em;
                vertical-align: 0.25em;
            }
        `}</style>
    </>
)


export const Redacted = ({
    children,
    hoverToShow,
}: PropsWithChildren<{
    hoverToShow?: boolean
}>) => (
    <>
        <span className="redacted">
            {children}
            <span className={classnames({ redact: true, 'hover-to-show': hoverToShow })}>{children}</span>
        </span>
        <style jsx>{`
            .redacted {
                position: relative;
            }

            .redact {
                font-family: 'Redacted';
                font-size: 1.2em;
                left: 0;
                line-height: 1;
                position: absolute;
                top: 0;
                transition: opacity 0.25s;
                transform: rotate(1deg);
            }

            .redact.hover-to-show:hover {
                opacity: 0.25;
            }
        `}</style>
    </>
)

export const RedactedFont = () => (
    <style jsx global>
        {`
            @font-face {
                font-family: 'Redacted';
                src:
                    url('${RedactedOtf}') format('woff2'),
                    url('${RedactedTtf}') format('opentype'),
                    url('${RedactedWoff2}') format('truetype');
            }
        `}
    </style>
)

export const MainFont = () => (
    <style jsx global>
        {`
            @font-face {
                font-family: 'Ink Free';
                src: url('${InkFree}') format('truetype');
            };
            @font-face {
                font-family: 'LXGW Wenkai';
                src: url('${LXGWWenkai}') format('truetype');
            };
        `}
    </style>
)