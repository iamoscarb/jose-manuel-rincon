import { Box, IconButton } from "@mui/material"
import { socialMediaList } from "../data/SocialMedia"
import { SocialMediaIcons } from "../icons/SocialMediaIcons"

export const Footer = () => {
    return (
        <Box className="grid grid-flow-row justify-center-safe p-5 bg-blue" >
            <div className="grid grid-flow-col gap-3">
                {
                    socialMediaList.map((social) => (
                        <a href={social.url} target="_blank">
                            <IconButton aria-label={social.nameSocial} key={social.nameSocial}>
                                {SocialMediaIcons[social.nameSocial]}
                            </IconButton>
                        </a>
                    ))
                }
            </div>

            <div className="pt-3 flex justify-center">
                <p className="text-center text-white text-sx">&copy; 2026 Oscar Bazan</p>
            </div>
        </Box>
    )
}
