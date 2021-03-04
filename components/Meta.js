import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' lang='en' />
            <link rel='icon' href='/icons8-image-100.png' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Image Colors',
    keywords: 'colors in image, color finder,get hex values from colour ',
    description: 'Get the dominant colours inside a image',
}

export default Meta;