import { BiSmile, BiWallet } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";

export const services = [
    {
        id: '001',
        icon: BiWallet,
        txtLg: 'Trusted wallet recovery',
        txtSm: 'The most trusted name in digital asset recovery since 2017.'
    },
    {
        id: '002',
        icon: GrSecure,
        txtLg: 'Secure Air-Gapped Storage',
        txtSm: 'All wallet and password data is encrypted and stored on offline, air-gapped servers.'
    },
    {
        id: '003',
        icon: BiSmile,
        txtLg: 'Start for Free',
        txtSm: 'A no-risk guarantee that you won\'t pay us a dime if we can\'t recover your password.'
    },
]

export const countries = [
    'Australia', 'Canada', 'China', 'Crimea', 'India', 'Iran', 'Syria', 'Nigeria', 'North Korea', 'Pakistan', 'United States', 'United Kingdom', 'Others'
]

export const recoveryTypes = [
    'Password recovery', 'Scam tracing', 'Hard drive recovery', 'crosschain transactions', 'others'
]

export const walletTypes = [
    'blockchain.com', 'bitcoin core', 'ethereum', 'metaMask', 'myEtherWallet', 'multiBit', 'dodgeChainCore', 'coinbase defi wallet', 'phanthom wallet', 'trust wallet', 'keplr walltet', 'others',
]