import { Box } from '@mui/material'
import { type PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    id: string;
}
export const CustomBox = ({ children, id }: Props) => {
    return (
        <Box id={id}
            sx={{
                bgcolor: '#3c3e40'
            }} className="p-10 scroll-m-16">
            {children}
        </Box>
    )
}
