import clsx from 'clsx';
import { Typography, type TypographyProps } from '@mui/material';
import { PageTitle } from '../data/PageTitles';

export const CustomLogo = ({ className, ...props }: TypographyProps) => {
    const title = PageTitle;
    return (
        <Typography
            component="h1"
            className={clsx(
                "py-0 px-0",
                className
            )}
            {...props}
            sx={{
                fontFamily: '"Staatliches", sans-serif',
            }}
        >
            {title}
        </Typography>
    )
}
