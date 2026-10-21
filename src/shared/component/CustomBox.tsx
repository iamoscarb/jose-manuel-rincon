import { Box, type BoxProps } from '@mui/material'
import clsx from 'clsx';

interface Props extends BoxProps {
    id: string;
}
export const CustomBox = ({ children, id, className, ...props }: Props) => {
    return (
        <Box id={id}
            className={clsx("p-10 scroll-m-16 bg-dark-blue", className)}
            {...props}
        >
            {children}
        </Box>
    )
}
