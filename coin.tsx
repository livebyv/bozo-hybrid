import React from 'react';

// Define the structure of a social media link
export interface SocialMediaLink {
  name: string
  url: string
  icon: JSX.Element // JSX.Element since icons are React components
}

// Define the structure of a coin
export interface Coin {
  tokenName: string
  tokenTicker: string
  tokenAmount: string
  nftAmount: string
  tick: string
  tokenDescription: string
  bridgeContract: string
  tokenContract: string
  coinLogo: string // path to the logo image
  socialMediaLinks: SocialMediaLink[]
  nftToTokenSwapAmount: number
  tokenToNftSwapAmount: number
  decimals: number
  isToken22: boolean
}

// Import icon components
import {
  TwitterIcon,
  DiscordIcon,
  TelegramIcon,
  TikTokIcon,
  GeckoTerminalIcon,
  MagicEdenIcon,
  TensorIcon,
  SolsniperIcon,
} from "../components/ui/SocialMediaIcons"

// Array of coins
export const coins: Coin[] = [
  {
    coinLogo: "/assets/coinLogos/bozo-logo.png",
    tokenName: "bozo HYBRID",
    tokenTicker: "$BOZO",
    tokenAmount: "800,000",
    tick: "bozo",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 800000,
    tokenDescription: "Bozo HYBRID is the first NFTxTOKEN hybrid innovation changing the game.",
    bridgeContract: "EXqYZtA1d4Nx2WjYuQ1GvdeujFM8VbvmjfdmJBJj7guc",
    tokenContract: "EJPtJEDogxzDbvM8qvAsqYbLmPj5n1vQeqoAzj9Yfv3q",
    isToken22: false,
    // Ensure tensor link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/bozoHYBRID",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.gg/pXyRPg3fu2",
        icon: <DiscordIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/bozoHYBRID",
        icon: <TelegramIcon />,
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@bozohybrid",
        icon: <TikTokIcon />,
      },
      {
        name: "GeckoTerminal",
        url: "https://www.geckoterminal.com/solana/pools/5zGFqaUYYtm7GMz9sD5kBhc294SRLA4hXfzwaHdM3kXo",
        icon: <GeckoTerminalIcon />,
      },
      {
        name: "Magic Eden",
        url: "https://magiceden.io/marketplace/bozo_",
        icon: <MagicEdenIcon />,
      },
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/bozo_spl20",
        icon: <TensorIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafybeievcwt2kef6olonvu4aaw2ud5tjezq567kqq7cijsquveim723fni.ipfs.nftstorage.link/",
    tokenName: "GH0ST",
    tokenTicker: "$GH0ST",
    tokenAmount: "1,000",
    tick: "GH0ST",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000,
    tokenDescription: "The first SPL22 fair launch inscription coin utilizing Token Extension Metadata as an open-source NFT standard.",
    bridgeContract: "E8E6GvyCpbGu7YSFxfhTXGx6SW4VhzVmxWh3gbrgXZNd",
    tokenContract: "HbxiDXQxBKMNJqDsTavQE7LVwrTR36wjV2EaYEqUw6qH",
    isToken22: true,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/GH0STC0IN",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.com/invite/RgtFus49A2",
        icon: <DiscordIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/gh0stc0in",
        icon: <TelegramIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/gh0st",
        icon: <SolsniperIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://nftstorage.link/ipfs/bafkreieizaoip6f5yvjatbwydzlyaztrata2baq4hroicm6bblkdsx2lom",
    tokenName: "TESTSpl20",
    tokenTicker: "$TEST",
    tokenAmount: "1,000",
    tick: "test",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000,
    tokenDescription: "This is the test SPL for purpose of playing with inscriptions.",
    bridgeContract: "2bSESUzjyCcG4Kbozf1ExTBBGx4rtqfGdnkSNZyfvD7Y",
    tokenContract: "5n3jtLLFETpTkqXUZQHHgiGs6zaNZP32GSWrHb2RzpbC",
    isToken22: false,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/test_spl20",
        icon: <TensorIcon />,
      },
      // Add other social media links here...
    ],
  },
  // Add other coins
    {
    coinLogo: "https://bafybeievcwt2kef6olonvu4aaw2ud5tjezq567kqq7cijsquveim723fni.ipfs.nftstorage.link/",
    tokenName: "balance",
    tokenTicker: "$balance",
    tokenAmount: "1,000",
    tick: "Senshi",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000,
    tokenDescription: "1000 Samurai",
    bridgeContract: "E8E6GvyCpbGu7YSFxfhTXGx6SW4VhzVmxWh3gbrgXZNd",
    tokenContract: "HbxiDXQxBKMNJqDsTavQE7LVwrTR36wjV2EaYEqUw6qH",
    isToken22: true,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/datamancerIo",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.gg/dgykbmDw",
        icon: <DiscordIcon />,
      },
      {
        name: "Magic Eden",
        url: "https://magiceden.io/marketplace/senshi_samurai",
        icon: <MagicEdenIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/senshi
        icon: <SolsniperIcon />,
      },
      // Add other social media links here...
    ],
  },
]
