import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";

import DescriptionBlock from "src/components/ui/DescriptionBlock";
import Loading from "src/components/ui/loading";
import BaseLayout from "src/layouts/BaseLayout";

import type { NextPageWithLayout } from "../../_app";
import type { IAMModel } from "src/types/iam/model";

import iamService from 'src/services/iam';


const SelectMethod: NextPageWithLayout = () => {
    const { query: { id } } = useRouter();
    const {
        isLoading: isLoadingIAMModel,
        data: iamModel,
    } = useQuery<IAMModel>(['iam-model', id], () => iamService.getModelById(id as string),
        { enabled: Boolean(id) }
    )

    if (isLoadingIAMModel) return <Loading />

    return (
        iamModel ? <DescriptionBlock
            title={iamModel.name}
            description={iamModel.description}
            ctas={<Link href='/' passHref>
                <Button variant="contained">Home</Button>
            </Link>}
        >
        </DescriptionBlock>
            : null
    );
};

SelectMethod.getLayout = BaseLayout

export default SelectMethod;
