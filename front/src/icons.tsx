import React from 'react';

import SVGGithubIcon from './svgs/github-svgrepo-com.svg';
import SVGEmailIcon from './svgs/mail-svgrepo-com.svg';
import SVGHeartIcon from './svgs/heart-svgrepo-com.svg';
import SVGPhoneIcon from './svgs/phone-svgrepo-com.svg';
import SVGMoonIcon from './svgs/moon-svgrepo-com.svg';
import SVGSunIcon from './svgs/sun-svgrepo-com.svg';
import SVGSaveIcon from './svgs/save-svgrepo-com.svg';
import SVGResizeIcon from './svgs/resize.svg';
import SVGImageUploadIcon from './svgs/image.svg';
import SVGFolderIcon from './svgs/folder.svg';
import SVGLightningIcon from './svgs/lightning.svg';

export const GithubIcon = React.memo((): JSX.Element => <SVGGithubIcon />);
export const EmailIcon = React.memo((): JSX.Element => <SVGEmailIcon />);
export const HeartIcon = React.memo((): JSX.Element => <SVGHeartIcon />);
export const PhoneIcon = React.memo((): JSX.Element => <SVGPhoneIcon />);
export const MoonIcon = React.memo((): JSX.Element => <SVGMoonIcon />);
export const SunIcon = React.memo((): JSX.Element => <SVGSunIcon />);
export const SaveIcon = React.memo((): JSX.Element => <SVGSaveIcon />);
export const ResizeIcon = React.memo((): JSX.Element => <SVGResizeIcon />);
export const ImageUploadIcon = React.memo(
    (): JSX.Element => <SVGImageUploadIcon />
);
export const FolderIcon = React.memo((): JSX.Element => <SVGFolderIcon />);
export const LightningIcon = React.memo(
    (): JSX.Element => <SVGLightningIcon />
);
