import '../styles/globals.css'
import type {AppProps} from 'next/app'
import store from "../redux/store";
import {Provider as ReduxProvider} from "react-redux";
import Notifications from "../components/Notifications";
import {AuthContextProvider} from "@elrond-giants/erd-react-hooks";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ReduxProvider store={store}>

        <meta name="application-name" content="next PWA demo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="none" /> {/* learn more  https://blog.giantgeek.com/?p=1418 */}
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        // adding icons 
        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="150x150" href="/icons/150x150.png" />
        <link rel="apple-touch-icon" sizes="284x284" href="/icons/284x284.png" />
        <link rel="apple-touch-icon" sizes="310x310" href="/icons/310x310.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/30x30.png" />

        {/* Important adding manifest.json file */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        // SEO 
        <meta property="og:type" content="website" />
        <meta property="og:title" content="nex PWA demo" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://next-pwa-demo-two.vercel.app/" />
        <meta property="og:image" content="/icons/StoreLogo.png" />
            <AuthContextProvider
                env={process.env.NODE_ENV === "production" ? "mainnet" : "devnet"}
                projectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_ID}
            >
                <Component {...pageProps} />
                <Notifications/>
            </AuthContextProvider>
        </ReduxProvider>
    );
}

export default MyApp
