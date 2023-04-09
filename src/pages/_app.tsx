import 'antd/dist/reset.css';
import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/pages/components/layout";
import {RecoilRoot} from "recoil";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/components/dev";

export default function App({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <Layout>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <Component {...pageProps} />
                </DevSupport>
            </Layout>
        </RecoilRoot>
    )
}
