import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.shemale.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.shemale.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Savory',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x021443316C1a86b7bADb537F948bE82de4F67e69',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x067FC72ab9743b431Ab8D8a85758B2d30e81E75b',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Voting",
        href: "https://snapshot.page/#/shemalefinance.eth/",
      },      
      {
        label: "Github",
        href: "https://github.com/ShemaleFinance/",
      },
      {
        label: "Docs",
        href: "https://docs.shemale.finance/",
      },
      {
        label: "Blog",
        href: "https://shemalefinance.medium.com/",
      },
    ],
  },
]

export default config
