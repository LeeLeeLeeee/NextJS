import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { AppConfig } from '@/const/AppConfig';

type IMetaProps = {
    title: string;
    description: string;
    canonical?: string;
};

const Meta = (props: IMetaProps) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
            </Head>
            <NextSeo
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                openGraph={{
                    title: props.title,
                    description: props.description,
                    url: props.canonical,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                }}
            />
        </>
    );
};

export { Meta };
