import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface DescriptionBlockProps {
    children?: React.ReactNode;
    ctas?: React.ReactNode;
    description?: string;
    title?: string;
    orientation?: "horizontal" | "vertical";
}
export default function DescriptionBlock({
    description,
    title,
    children,
    ctas,
    orientation = 'vertical'
}: DescriptionBlockProps) {
    return (
        <Box className={`orientation-${orientation}`} sx={{
            p: '20px',
            bgcolor: '#D9D9D9',
            borderRadius: '5px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Stack direction={`${orientation === 'vertical' ? 'column' : 'row'}`} columnGap={5} rowGap={2} sx={{ height: 1 }}>
                {title
                    ? <Typography className="title" variant="h4" >
                        {title}
                    </Typography>
                    : null}
                {children}
                <Box sx={{
                    flex: '1 1 auto',
                    flexDirection: 'column',
                }}>
                    {description ? <Typography variant="body1">{description}</Typography>
                        : null}
                </Box>
            </Stack>
            <Stack direction='row' justifyContent='flex-end'>{ctas}</Stack>
        </Box>
    );
}
