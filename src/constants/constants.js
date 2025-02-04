import { LiaBoltSolid } from "react-icons/lia"
import { PiChatCircleDotsLight, PiWallet } from "react-icons/pi"
import { TfiCommentsSmiley } from "react-icons/tfi"

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
        txtLg: 'Upload Your Locked Wallet and Guesses',
        txtSm: 'Upload your data at any time to enhance our chances of wallet recovery. Rest assured, all your information is securely encrypted during transit and storage.',
        imgSrc: 'tab0.png'
    },
    {
        id: 'tl02',
        txtLg: 'Your Wallet Secured by an Air-Gap',
        txtSm: 'For maximum security, your encrypted wallet backup is transferred offline to a secure, air-gapped server.',
        imgSrc: 'tab1.png'
    },
    {
        id: 'tl03',
        txtLg: 'Your Password Recovered',
        txtSm: 'Our advanced password recovery methods have a 50% success rate in brute-forcing wallet passwords.',
        imgSrc: 'tab2.png'
    },
]

export const supportData = [
    {
        id: 'sd001',
        icon: PiChatCircleDotsLight,
        textlg: 'Password Doesn’t Work',
        textSm: 'If you can\'t unlock your wallet with your password, it might be due to different numbers or capitalization than you remember.',
        linkTxt: 'Recover my password'
    },
    {
        id: 'sd002',
        icon: LiaBoltSolid,
        textlg: 'Partial Seed Phrase Recovery',
        textSm: 'If you have part of your seed phrase, we can help recover your wallet using the words you wrote down.',
        linkTxt: 'Recover my seed'
    },
    {
        id: 'sd003',
        icon: PiWallet,
        textlg: 'Lost Access to a Major Chain Wallet',
        textSm: 'If you\'ve lost access to popular wallets like Bitcoin, Ethereum, or Litecoin, we can help you recover them.',
        linkTxt: 'Recover my wallet'
    },
    {
        id: 'sd004',
        icon: TfiCommentsSmiley,
        textlg: 'You\'ve Been Scammed',
        textSm: 'We offer a tracing service to help you track down the identity of a scammer.',
        linkTxt: 'Recover my wallet'
    }
]

export const faqsData = [
    {
        id: 'faq001',
        question: 'How Does It Work?',
        answer: 'Our recovery methods vary based on the case. For password recovery, we guide clients through extracting encrypted backups and creating a list of password guesses. These are tested on secure servers that try billions of combinations until the correct one is found.'
    },
    {
        id: 'faq002',
        question: 'Can I Trust You?',
        answer: 'We understand the importance of trust. Our founders have been featured in global media outlets, including BBC, Business Insider, and VICE. Additionally, we are a registered LLC in New Hampshire with a public business address.'
    },
    {
        id: 'faq003',
        question: 'Do I Need to Share All My Passwords?',
        answer: 'No, we’ll never ask you to share more information than you’re comfortable with.'
    },
    {
        id: 'faq004',
        question: 'Are You Legit – Will You Steal My Funds?',
        answer: 'We are a legitimate business with public founders and a business address. We would never steal from clients, and our Trustpilot reviews speak for our credibility.'
    },
    {
        id: 'faq005',
        question: 'I Have Zero Wallet Information – Can You Help?',
        answer: 'If you’ve lost all your wallet details, there’s not much we can do. However, in some cases, we may be able to recover deleted files from old devices or help with certain wallet platforms like Blockchain.com.'
    },
    {
        id: 'faq006',
        question: 'Can You Recover Scammed or Stolen Assets?',
        answer: 'Unfortunately, recovering funds from scams is very difficult. We do offer scam tracing, where we investigate the movement of your funds and create a case that can be used with law enforcement or exchanges to increase your chances of recovery.'
    },
    {
        id: 'faq007',
        question: 'How Long Does the Recovery Process Take?',
        answer: 'The recovery process can take anywhere from an hour to over six months, depending on the complexity of the case and our continuous search for new recovery vectors.'
    },
    {
        id: 'faq008',
        question: 'What Types of Crypto Can You Recover?',
        answer: 'We support recovery for any BIP-39 or ERC-20 token, including legacy mnemonics, as well as a growing list of crypto wallets like Blockchain.com, Bitcoin Core, and MetaMask.'
    },
    {
        id: 'faq009',
        question: 'How Much Do You Charge?',
        answer: 'Our fee is 20% of any recovered funds. If no funds are recovered, you won’t incur any charges.'
    },
    {
        id: 'faq010',
        question: 'I Thought Bitcoin Couldn’t Be Hacked – What Gives?',
        answer: 'While it\'s impossible to directly hack the Bitcoin blockchain, we help recover access to your wallet by cracking your password using guesses and a private key backup.'
    },
]
