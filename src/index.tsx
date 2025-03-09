import { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { TbBrandGithub, TbBulb, TbGitFork } from 'react-icons/tb'
import Background from './assets/images/background.jpg'
import { AccountShowcase } from './components/display/accounts.tsx'
import { Capsule } from './components/display/capsule'
import { Footer, FooterLink, FooterParagraph } from './components/display/footer'
import { Header, ProfileAddonGroup, ProfileAddons } from './components/display/header'
import { Row } from './components/layout'
import { Dimmed } from './components/typography'
import { ACCOUNTS, COPYRIGHT, DESCRIPTION_PARAGRAPHS, PROFILE_NAME, PROFILE_PICTURE, PROFILE_TAGS } from './config.tsx'
import { classnames } from './lib/classnames.ts'
import faviconImage from './assets/images/favicon.jpg';
import ReactFavicon from 'react-favicon';

function ProfileLabel({ children, comment, icon, url }: { children: string; comment?: string; icon?: ReactNode; url?: string }) {
    const className = classnames({
        label: true,
        'no-comment': !comment,
        'no-icon': !icon,
        'no-link': !url,
    })
    return (
        <Capsule background="#333" href={url} icon={icon} iconBackground="white" iconColor="black" iconType="sharp" sharp>
            <span className={className}>
                {children}
                {comment && (
                    <span className="comment">
                        <Dimmed>{comment}</Dimmed>
                    </span>
                )}
            </span>
            <style jsx>{`
                .label {
                    display: inline-block;
                    font-weight: 500;
                    padding: 0.5rem;
                    padding-left: 0;
                }

                .label.no-comment {
                    font-weight: 300;
                }

                .label.no-icon {
                    padding-left: 0.5rem;
                }

                .comment {
                    font-weight: 300;
                    margin-left: 0.4em;
                }
                #label-link {
                    color: white;
                }
            `}</style>
        </Capsule>
    )
}

export const IndexPage = () => {
    return (
        <div className="container">
            <ReactFavicon url={faviconImage} />
            <title>shrike505 | Homepage</title>
            <Header profilePicture={PROFILE_PICTURE} profileName={PROFILE_NAME}>
                <ProfileAddons>
                    {PROFILE_TAGS.map(({ tags, title }) => (
                        <ProfileAddonGroup key={title} title={title}>
                            {tags.map(({ comment, icon, tag, url }) => (
                                <ProfileLabel key={tag} comment={comment} icon={icon} url={url}>
                                    {tag}
                                </ProfileLabel>
                            ))}
                        </ProfileAddonGroup>
                    ))}
                </ProfileAddons>
            </Header>

            <AccountShowcase.Container>
                {ACCOUNTS.map((category) => (
                    <AccountShowcase.Category key={category.type} title={category.type}>
                        {category.accounts.map(({ icon, iconBackground, name, platform, redacted, url }) => (
                            <AccountShowcase.Account
                                key={url}
                                href={url}
                                icon={icon}
                                iconBackground={iconBackground}
                                platform={platform}
                                redacted={redacted}
                                redactedHoverToShow
                            >
                                {name}
                            </AccountShowcase.Account>
                        ))}
                    </AccountShowcase.Category>
                ))}
            </AccountShowcase.Container>
            <Row>{DESCRIPTION_PARAGRAPHS}</Row>
            <Footer>
                <FooterParagraph icon={TbBrandGithub as IconType} color="#000000">
                    <FooterLink href="https://github.com/shrike-505/Home">
                        View source code of this page on GitHub
                    </FooterLink>
                </FooterParagraph>
                <FooterParagraph icon={TbGitFork as IconType} color="#000">
                    <FooterLink href="https://github.com/amphineko/reactiveneko">
                        Established upon the template of amphineko/reactiveneko
                    </FooterLink>
                </FooterParagraph>
                <FooterParagraph icon={TbBulb as IconType} color="#000">
                    {COPYRIGHT}
                </FooterParagraph>
            </Footer>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 64em;
                    margin: 0 auto;
                }
                .title {
                    color:rgb(32, 139, 0); /* color of the title */
                }
            `}</style>

            <style jsx global>{`
                body {
                    background: url(${Background});
                    background-color:rgb(224, 83, 83);
                    background-size: cover;
                    display: flex;
                    flex-direction: column;
                    font-family: 'Ink Free', 'LXGW Wenkai', 'Helvetica Neue', Helvetica, Arial, 'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                        'STHeiti Light', STXihei, '华文细黑', Heiti;
                    justify-content: center;
                    margin: 0;
                    min-height: 100vh;
                    padding: 1em;
                }
            `}</style>
        </div>
    )
}

export default IndexPage
