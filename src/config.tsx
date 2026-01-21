import {
    TbGalaxy,
    TbBrandBilibili,
    TbBrandGithub,
    TbBrandSteam,
    TbCookie,
    TbHorse,
    TbChessQueenFilled,
    TbNetwork,
} from 'react-icons/tb'
import { GiComputerFan } from "react-icons/gi"
import ProfilePictureOriginal from './assets/images/PPa.jpeg'
import ProfilePictureAvif from './assets/images/PPa.jpeg?format=avif'
import ProfilePictureJpeg from './assets/images/PPa.jpeg?format=jpeg'
import ProfilePicturePng from './assets/images/PPa.jpeg?format=png'
import ProfilePictureWebp from './assets/images/PPa.jpeg?format=webp'
import { ProfileNameStandout, ProfilePictureSources } from './components/display/header'
import { Description, DescriptionTitle, ExternalLink, Paragraph, Quotation, Redacted } from './components/typography'

export const PROFILE_PICTURE: ProfilePictureSources = {
    src: ProfilePictureOriginal,
    avif: ProfilePictureAvif,
    jpeg: ProfilePictureJpeg,
    png: ProfilePicturePng,
    webp: ProfilePictureWebp,
}

export const PROFILE_NAME = (
    <>
        <ProfileNameStandout
            backgroundColor="hsla(311, 91.20%, 82.20%, 0.79)"
            href="https://zh.wikipedia.org/wiki/%E4%BC%AF%E5%8A%B3%E7%A7%91"
            hoverRuby="shrike"
            hoverColor="hsla(304, 63.60%, 53.70%, 0.86)"
            ruby="10"
        >
            伯劳
        </ProfileNameStandout>
        505
    </>
)

export const PROFILE_TAGS: ProfileHeaderTagGroup[] = [
    {
        title: 'Also Known As',
        tags: [
            {
                tag: '3141',
                comment: 'since 2017',
            },
            {
                tag: '1ps9wxb',
                comment: 'since 2024',
            },
        ],
    },
    {
        title: 'What am I doing recently',
        tags: [
            {
                tag: 'Goddess',
                icon: <TbChessQueenFilled />,
                comment: 'Cold Old Reality',
                url: 'https://shrike505.cc/Goddess/',
            }
        ],
    },
    {
        title: 'Languages',
        tags: [
            {
                tag: '中文',
                comment: 'native',
            },
            {
                tag: 'ENG',
            },
            {
                tag: '日本語',
                comment: 'lil bit',
            },
        ],
    },
]

export const ACCOUNTS: Accounts[] = [
    {
        type: '笔记与作品集/Artworks',
        accounts: [
            {
                platform: 'Nest',
                name: '#现实的荒原',
                icon: <TbCookie />,
                iconBackground: '#f0621098',
                url: 'https://nest.shrike505.cc/',
            }
        ]
    },
    {
        type: '博客/Blog',
        accounts: [
            {
                platform: 'Eridanus',
                name: '#波江巨洞',
                icon: <TbGalaxy />,
                url: 'https://eridanus.shrike505.cc/',
                iconBackground: 'rgb(112, 154, 231)',
            }
        ]
    },
    {
        type: '开发/Dev',
        accounts: [
            {
                platform: 'GitHub',
                name: '@shrike-505',
                url: 'https://github.com/shrike-505/',
                icon: <TbBrandGithub />,
                iconBackground: '#000000',
            },
        ],
    },
    {
        type: '闲暇/Leisure',
        accounts: [
            {
                platform: 'Fimtale',
                name: '@叁壹肆壹',
                url: 'https://fimtale.com/u/%E5%8F%81%E5%A3%B9%E8%82%86%E5%A3%B9',
                icon: <TbHorse />,
                iconBackground: '#f0627098',
            },
            {
                platform: 'BiliBili',
                name: '@伯劳505',
                icon: <TbBrandBilibili />,
                iconBackground: 'rgb(227, 123, 201)',
                url: 'https://space.bilibili.com/164131287/',
            },
            {
                platform: 'Steam',
                name: '@RAINBOW_3141',
                url: 'https://steamcommunity.com/id/3141shrike505/',
                icon: <TbBrandSteam />,
                iconBackground: 'rgb(32, 14, 99)',
            },
        ],
    },
    {
        type: '单行本/Standalones',
        accounts: [
            {
                platform: 'Goddess',
                name: 'Work in Progress',
                icon: <TbChessQueenFilled />,
                iconBackground: 'rgb(255, 0, 0)',
                url: 'https://shrike505.cc/Goddess/',
            },
        ],
    },
]

export const DESCRIPTION_PARAGRAPHS = (
    <>
        <Description>
            <DescriptionTitle smallCaps>profile</DescriptionTitle>
            <Paragraph>
                <Quotation>
                    在科学和啤酒都不能安抚的夜晚 他们丢失了四季
                </Quotation>
            </Paragraph>
            <Paragraph>
                Sorrowful student pursuing some seemingly glamorous degree, Artist aiming to create the one and only true masterpiece, Maverick <Redacted hoverToShow>with</Redacted> <Redacted hoverToShow>pretension</Redacted>.
            </Paragraph>
            <Paragraph>
                Though tryna be in nice mood, in the spirit of <ExternalLink href="https://www.bilibili.com/bangumi/play/ep65467" color='Pink'>Pinkamena Diane Pie</ExternalLink>
            </Paragraph>
            <Paragraph>
                Leading an uncertain life full of miseries, I really wish to spend half of life foretelling the future, traveling back in history, and recording the present.
            </Paragraph>
            <Paragraph>
                Does it cost anything -- to be endowed with justice?
            </Paragraph>
        </Description>
    </>
)

export const COPYRIGHT = 'Copyright © 2024-2025 shrike505. Illustrations have their own licenses.'

interface Account {
    platform: string
    name: string | JSX.Element
    url?: string
    icon: JSX.Element
    iconBackground: string
    redacted?: boolean
}

interface Accounts {
    type: string
    accounts: Account[]
}

interface ProfileHeaderTag {
    tag: string
    comment?: string
    icon?: JSX.Element
    url?: string
}

interface ProfileHeaderTagGroup {
    title: string
    tags: ProfileHeaderTag[]
}
