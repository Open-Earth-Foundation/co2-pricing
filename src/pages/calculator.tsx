import BaseLayout from "../layouts/BaseLayout";
import type { NextPageWithLayout } from "./_app";

const Calculator: NextPageWithLayout = () => {
    return (
        <>
            Calculator
        </>
    );
};

Calculator.getLayout = BaseLayout

export default Calculator;
