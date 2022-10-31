import BaseLayout from "../layouts/BaseLayout";

import type { NextPageWithLayout } from "./_app";

const Landing: NextPageWithLayout = () => {
    return (
        <>
            Landing Page
        </>
    );
};

Landing.getLayout = BaseLayout

export default Landing;
