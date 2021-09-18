import Head from "next/head";
import Meta from "../components/common/Meta";

const about = () => {
    // const x = 5;
    return (
        <div>
            <Meta title="about"/>
            {/*<style jsx>*/}
            {/*    {`*/}
            {/*        .title {*/}
            {/*            color: ${x > 3 ? 'red' : 'blue'}*/}
            {/*        }*/}
            {/*    `}*/}
            {/*</style>*/}
            {/*<h1 className="title">about</h1>*/}
            <h1>about</h1>
        </div>
    )
};

export default about
