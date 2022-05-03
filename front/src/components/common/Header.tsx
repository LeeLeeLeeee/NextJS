import React from 'react';

import tw from 'twin.macro';
import { useRouter } from 'next/router';

import { useSettingsDispatch, useSettingsState } from '@/stores/setting/hook';
import { LightningIcon, MoonIcon, SunIcon } from '@/icons';

import IconButton from './button/IconButton';

const Header = tw.div`
    fixed
    w-full
    p-2
    flex
    justify-between
    items-center
    pl-96
    pr-96
    shadow-sm
    z-10
    bg-white
    dark:bg-black
`;

function HeaderComponent() {
    const { mode } = useSettingsState();
    const router = useRouter();
    const { setThemeMode } = useSettingsDispatch();
    const handleLightClick = () => {
        setThemeMode('dark');
    };
    const handleMoonClick = () => {
        setThemeMode('light');
    };

    return (
        <Header>
            <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/')}
            >
                <LightningIcon />
            </span>
            <div>
                {mode === 'light' ? (
                    <IconButton
                        color="light"
                        onClick={handleLightClick}
                        iconNode={<SunIcon />}
                    />
                ) : (
                    <IconButton
                        color="light"
                        onClick={handleMoonClick}
                        iconNode={<MoonIcon />}
                    />
                )}
            </div>
        </Header>
    );
}

export default React.memo(HeaderComponent);
