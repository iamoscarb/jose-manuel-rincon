import { FACEBOOK_LINK, INSTAGRAM_LINK, TIKTOK_LINK, X_LINK, YOUTUBE_LINK } from "./SocialLinks";
import { FbUserId } from "./SocialUsers";

export const socialMediaList = [
    { nameSocial: 'facebook', url: `${FACEBOOK_LINK}profile.php?id=${FbUserId}` },
    { nameSocial: 'instagram', url: `${INSTAGRAM_LINK}josemanuelrincon_` },
    { nameSocial: 'x', url: `${X_LINK}JoseMRincon_` },
    { nameSocial: 'youtube', url: `${YOUTUBE_LINK}@josemanuel_rincon` },
    { nameSocial: 'tiktok', url: `${TIKTOK_LINK}@josemanuelrincon_` },
]