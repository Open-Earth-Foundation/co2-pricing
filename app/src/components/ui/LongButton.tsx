import { Box, Button } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import type { ComponentProps } from "react";


const LongButton = ({ children, onClick, sx, ...buttonProps }: ComponentProps<typeof Button>) => {
    return (
        <>
            <Button
                fullWidth
                variant={'contained'}
                sx={{
                    height: 76,
                    borderRadius: 2,
                    ...sx
                }}
                endIcon={<ArrowForwardIcon />}
                onClick={onClick}
                {...buttonProps}
            >
                <Box sx={{ display: 'flex' }}>
                    {children}
                </Box>
            </Button>
        </>
    )
}


export default LongButton