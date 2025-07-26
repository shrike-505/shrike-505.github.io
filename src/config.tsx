import {
    TbGalaxy,
    TbBrandBilibili,
    TbBrandGithub,
    TbBrandSteam,
    TbCookie,
    TbHorse,
    TbChessQueenFilled,
    TbCalendar,
} from 'react-icons/tb'
import { GiJapan } from "react-icons/gi"
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
        title: 'Maybe working on for one whole summer',
        tags: [
            {
                tag: 'Toefl',
                icon: <TbCalendar />,
                comment: 'What is this?',
                url: 'https://nest.shrike505.cc/notes/Language/Cpp/',
            },
            {
                tag: '日本語',
                icon: <GiJapan />,
                comment: 'Learning',
            },
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
                comment: 'learning',
            },
        ],
    },
]

export const ACCOUNTS: Accounts[] = [
    {
        type: '笔记与作品集',
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
        type: '博客',
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
        type: 'Dev',
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
        type: 'Leisure',
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
        ],
    },
    {
        type: 'Gaming',
        accounts: [
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
        type: '单行本',
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
            <DescriptionTitle smallCaps>about</DescriptionTitle>
            <Paragraph>
                <Quotation>
                    自然赠予你 树冠 微风 肩头的暴雨
                </Quotation>
            </Paragraph>
            <Paragraph>
                Sobbing student with awful code ability however pursuing some code-related degree, Maverick, Writer <Redacted hoverToShow>withPretension</Redacted>.
            </Paragraph>
            <Paragraph>
                Partyholic chasing steps of <ExternalLink href="https://www.bilibili.com/bangumi/play/ep65467" color='Pink'>Pinkamena Diane Pie</ExternalLink>
            </Paragraph>
            <Paragraph>
                Wanna spending half of life foretelling the future and traveling back in time.
            </Paragraph>
            {/* <DescriptionTitle smallCaps>code of life</DescriptionTitle>
            <Paragraph>
                Joy & Fun
            </Paragraph> */}
        </Description>
    </>
)

export const COPYRIGHT = 'Copyright © 2024-? shrike505. Illustrations have their own licenses.'

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
