import Head from "next/head";

const Meta = ({title, keyword, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keyword" content={keyword}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

Meta.defaultProps = {
    title: "mamad ina",
    keyword: "khafan, mamad",
    description: "oh my god !"
}

export default Meta;