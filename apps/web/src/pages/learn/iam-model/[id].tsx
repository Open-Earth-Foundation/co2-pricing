import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";

import DescriptionBlock from "@/components/ui/DescriptionBlock";
import BaseLayout from "layouts/BaseLayout";
import iamService from 'services/iam';
import NoData from "@/components/ui/NoData";
import Loading from "@/components/ui/Loading";

import type { NextPageWithLayout } from "types/ui";
import type { IAMModel } from "types/iam/model";


const SelectMethod: NextPageWithLayout = () => {
    const { query: { id } } = useRouter();
    const iamModel = useQuery<IAMModel>(
        ['iam-model', id], () => iamService.getModelById(id as string),
        { enabled: Boolean(id) }
    )

    if (iamModel.isLoading) return <Loading />

    return (
        iamModel.data ? <DescriptionBlock
            title={iamModel.data.name}
            description={iamModel.data.description}
            ctas={<Link href='/' passHref>
                <Button variant="contained">Home</Button>
            </Link>}
        >
        </DescriptionBlock>
            : <NoData />
    );
};

SelectMethod.getLayout = BaseLayout

export default SelectMethod;
