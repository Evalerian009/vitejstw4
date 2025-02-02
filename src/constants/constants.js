import { LiaBoltSolid } from "react-icons/lia";
import { PiChatCircleDotsLight, PiWallet } from "react-icons/pi";
import { TfiCommentsSmiley } from "react-icons/tfi";

export const navLinks = [
    {
        id: 'nvl1',
        name: 'Home',
        url: '/'
    },
    {
        id: 'nvl2',
        name: 'Pricing',
        url: 'pricing'
    },
    {
        id: 'nvl3',
        name: 'Testimonials',
        url: 'testimonials'
    },
]

export const tabList0 = [
    {
        id: 'tl01',
        txtLg: 'Upload your locked wallet and guesses',
        txtSm: 'Our user dashboard allows you to upload data whenever you\'d like to improve our odds of recovery. All data is encrypted in transit and at rest.',
        imgSrc: 'tab0.png'
    },
    {
        id: 'tl02',
        txtLg: 'Your wallet secured by an air-gap',
        txtSm: 'To ensure data integrity, your encrypted wallet backup is moved, off-line to one of our state of the art air-gaped servers.',
        imgSrc: 'tab1.png'
    },
    {
        id: 'tl03',
        txtLg: 'Your password recovered',
        txtSm: 'Our state of the art attack strategies for brute forcing wallet passwords have achieved roughly a 50% success rate.',
        imgSrc: 'tab2.png'
    },
]

export const supportData = [
    {
        id: 'sd001',
        icon: PiChatCircleDotsLight,
        textlg: 'Password doesn\'t work',
        textSm: `You thought you knew your password, but now it won't unlock your wallet. Perhaps it involves different numbers or different capitalization than you remember.`,
        linkTxt: 'Recover my password'
    },
    {
        id: 'sd002',
        icon: LiaBoltSolid,
        textlg: 'Partial seed phrase recovery',
        textSm: 'You wrote down a list of words, and the passphrase is some combination of those words.',
        linkTxt: 'Recover my seed'
    },
    {
        id: 'sd003',
        icon: PiWallet,
        textlg: 'Lost access to a major chain wallet',
        textSm: 'You have lost access to a common crypto asset, such as Bitcoin, Ethereum, Litecoin, Dogecoin, an NFT or dozens of other alt coins',
        linkTxt: 'Recover my wallet'
    },
    {
        id: 'sd004',
        icon: TfiCommentsSmiley,
        textlg: 'You\'ve been scammed',
        textSm: 'We offer a Tracing service (not a recovery service) for those looking to build their case and hopefully uncover the real-world identity of their scammer.',
        linkTxt: 'Recover my wallet'
    }
]

export const faqsData = [
    {
        id: 'faq001',
        question: 'How does it work?',
        answer: 'The techniques we use to recover our clients’ accounts vary widely from case to case. In the event of a password recovery we will walk our clients through extracting an encrypted private key backup and building a comprehensive list of possible password guesses. We then transfer our client’s data to secure password cracking servers that use the data collected from the client to try billions or trillions of possible password combinations until the correct password is found.'
    },
    {
        id: 'faq002',
        question: 'Can I trust you?',
        answer: 'We understand the issue of trust and authority is one that must be addressed before our clients feel comfortable sharing sensitive financial information with us. We are the only crypto asset recovery company with public founders who have been featured in multiple global media outlets such as the BBC, Business Insider, and VICE (read more about our founders Chris and Charles).Furthermore, CryptoAssetRecovery.com is a registered LLC in good standing in the state of New Hampshire with a public business address.'
    },
    {
        id: 'faq003',
        question: 'Do I need to tell you all my passwords?',
        answer: 'No. We will never ask our clients to divulge more information than they are comfortable sharing with us.'
    },
    {
        id: 'faq004',
        question: 'Are you legit - will you steal my funds?',
        answer: 'We would never steal a client’s funds for any reason. We are a business based out of New Hampshire with public founders and a public business address, so if we were to steal from, or attempt to defraud our clients, it would be a simple process to report us which would quickly lead to our arrest and eventual jail time!Furthermore, since 2021 we have received countless 5-star reviews on our third party and unbiased review platform TrustPilot which we encourage you to read on Trustpilot.'
    },
    {
        id: 'faq005',
        question: 'I have zero wallet information - can you help me?',
        answer: 'If you have completely deleted your seed phrase or have thrown away a computer or phone with a private key backup on it, there is little to nothing we can do to assist you.In certain cases (such as with Blockchain.com) we can retrieve the backup file for you and occasionally we can recover deleted files off of an old hard drive.However, if you have lost access to a seed phrase and do not have a partial, or incorrect seed phrase recorded, there is nothing we or any other recovery company can do to assist you.'
    },
    {
        id: 'faq006',
        question: 'Can you recover scammed or stolen assets?',
        answer: `Unfortunately, no. When you have lost funds to a crypto scam, the odds of recovering those funds are very small to none. What we do offer, however, are scam tracing services.

        Scam tracing is for anyone who has been scammed and wishes to explore every option possible for recovery. Our investigations specialists will create a case detailing and visualizing the path your funds took and any connections we are able to make to real-world entities. Once you have that information on hand we will explain the recommended recovery path through law enforcement and any relevant exchanges to give you the best chance at recovery possible.

        We published an article on best practices when you have been the victim of a scam, you can read it here.`
    },
    {
        id: 'faq007',
        question: 'How long does the recovery process take?',
        answer: 'The process of recovering lost crypto can vary in time from as short as 1 hour, to as long as 6+ months. While this may sound lengthy, this is because we typically exhaust our initial search within a week after initially onboarding a client. After this initial search has been exhausted, we hold on to the private key backup and password guesses to continue retesting as we discover new recovery vectors and expand our hardware capabilities (unless otherwise requested to delete client information).'
    },
    {
        id: 'faq008',
        question: 'What types of crypto can you recover?',
        answer: 'The types of crypto that we support are expanding every day. At the moment we support seed phrase recovery for any type of bip-39 or erc-20 token including legacy mnemonics, 13th and 25th words.For password recoveries, our list of currently supported accounts is: Blockchain.com, Bitcoin Core, Multibit, Electrum, MetaMask, MyEtherWallet, Mist Ethereum Wallet, Dogechain Core, and Dogechain.info.'
    },
    {
        id: 'faq009',
        question: 'How much do you charge?',
        answer: 'We work on a service based fee of 20% of any funds recovered. This means that if your account ends up being empty, there is no charge to you.'
    },
    {
        id: 'faq010',
        question: `I thought bitcoin couldn't be hacked? What gives!`,
        answer: 'Correct. It is mathematically impossible to directly hack the Bitcoin Blockchain.However, our approach involves using the Bitcoin owner’s password guesses to “crack” their password. In combination with a private key backup (essentially an encrypted private key) this allows our clients to regain control of their funds.'
    },

]