import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface Props {
    description: string;
    title?: string;
    children?: React.ReactNode;
    orientation?: "horizontal" | "vertical";
}
export default function DescriptionBlock({ description, title, children: callToActionElements, orientation = 'vertical' }: Props) {
    return (
        <Box className={`orientation-${orientation}`} sx={{
            p: '20px',
            g: '11px',
            bgcolor: '#D9D9D9',
            borderRadius: '8px',
        }}>
            {title
                ? <Typography className="title" variant="h4" >
                    {title}
                </Typography>
                : null}
            <Typography variant="body1">{description}</Typography>
            <Stack direction='row-reverse'>{callToActionElements}</Stack>
        </Box>
    );
}