import {
    Tb123,
    TbBrandBilibili,
    TbBrandGithub,
    TbBrandSteam,
    TbCookie,
    TbHorse,
    TbMoodSadFilled,
    TbStar,
} from 'react-icons/tb'
import { 
    IoIosSad,
} from "react-icons/io"
import ProfilePictureOriginal from './assets/images/PPa.jpeg'
import ProfilePictureAvif from './assets/images/PPa.jpeg?format=avif'
import ProfilePictureJpeg from './assets/images/PPa.jpeg?format=jpeg'
import ProfilePicturePng from './assets/images/PPa.jpeg?format=png'
import ProfilePictureWebp from './assets/images/PPa.jpeg?format=webp'
import { ProfileNameStandout, ProfilePictureSources } from './components/display/header'
import { Description, DescriptionTitle, Paragraph, Redacted } from './components/typography'

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
            href="#"
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
        title: 'AlsoKnownAs',
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
        title: 'CurrentLearning',
        tags: [
            {
                tag: 'System',
                icon: <TbMoodSadFilled />,
            },
            {
                tag: 'AdvancedDataStructure',
                icon: <IoIosSad />,
            },
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
            {
                tag: 'Swenska',
                comment: 'learning',
            }
        ],
    },
]

export const ACCOUNTS: Accounts[] = [
    {
        type: '笔记与作品集',
        accounts: [
            {
                platform: 'Nest',
                name: '现实的荒原',
                icon: <TbCookie />,
                iconBackground: '#f0621098',
                url: 'https://shrike505.cc/',
            }
        ]
    },
    {
        type: '博客',
        accounts: [
            {
                platform: 'Eridanus',
                name: 'Work in Progress',
                icon: <TbStar />,
                iconBackground: '#f0627098',
            }
        ]
    },
    {
        type: 'Dev',
        accounts: [
            {
                platform: 'GitHub',
                name: 'shrike-505',
                url: 'https://github.com/shrike-505/',
                icon: <TbBrandGithub />,
                iconBackground: '#000000',
            },
        ],
    },
    {
        type: 'Party',
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
                iconBackground: '#ff9933aa',
                url: 'https://space.bilibili.com/164131287/',
            },
        ],
    },
    {
        type: 'gaming',
        accounts: [
            {
                platform: 'Steam',
                name: 'RAINBOW_3141',
                url: 'https://steamcommunity.com/id/3141shrike505/',
                icon: <TbBrandSteam />,
                iconBackground: '#000000aa',
            },
        ],
    },
    {
        type: '单行本',
        accounts: [
            {
                platform: 'Goddess',
                name: 'Work in Progress',
                icon: <Tb123 />,
                iconBackground: '#f0627098',
                url: 'https://shrike505.cc/Goddess/',
            },
        ],
    },
]

export const DESCRIPTION_PARAGRAPHS = (
    <>
        <Description>
            <DescriptionTitle smallCaps>TBD</DescriptionTitle>
            <Paragraph>
                TBD (<Redacted hoverToShow>recently...Maybe?</Redacted>)
            </Paragraph>
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
}

interface ProfileHeaderTagGroup {
    title: string
    tags: ProfileHeaderTag[]
}
