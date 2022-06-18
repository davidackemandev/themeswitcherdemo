import React, { useState } from 'react';

export default function ThemeSwitcher(props) {
  const [fontActive, setFontActive] = useState(() => {
    const initValue =
      typeof window !== 'undefined' && localStorage.getItem('font-mode');
    return initValue !== null ? initValue : 'sans';
  });
  const [colorMode, setColorMode] = useState(() => {
    const initValue =
      typeof window !== 'undefined' && localStorage.getItem('color-mode');
    return initValue !== null ? initValue : 'light';
  });

  const sansActive = fontActive === 'sans' ? 'active' : '';
  const serifActive = fontActive === 'serif' ? 'active' : '';
  const lightActive = colorMode === 'light' ? 'active' : '';
  const darkActive = colorMode === 'dark' ? 'active' : '';
  const solarizedActive = colorMode === 'solarized' ? 'active' : '';
  const cobaltActive = colorMode === 'cobalt' ? 'active' : '';

  const selectColorMode = (e) => {
    const value = e.target.dataset.value;
    document.documentElement.setAttribute('color-mode', value);
    localStorage.setItem('color-mode', value);
    setColorMode(value);
    return;
  };
  const setSans = () => {
    document.documentElement.setAttribute('font-mode', 'sans');
    localStorage.setItem('font-mode', 'sans');
    setFontActive('sans');
  };
  const setSerif = () => {
    document.documentElement.setAttribute('font-mode', 'serif');
    localStorage.setItem('font-mode', 'serif');
    setFontActive('serif');
  };

  return (
    <div className='themeSelectOuterWrap'>
      <div className='themeSelectInnerWrap'>
        <div className='themeButtonsWrap'>
          <div
            className={`button ${lightActive}`}
            data-value='light'
            onClick={(e)=>{selectColorMode(e)}}
          >
            Light
          </div>
          <div
            className={`button ${solarizedActive}`}
            data-value='solarized'
            onClick={(e)=>{selectColorMode(e)}}
          >
            Solarized
          </div>
          <div
            className={`button ${darkActive}`}
            data-value='dark'
            onClick={(e)=>{selectColorMode(e)}}
          >
            Dark
          </div>
          <div
            className={`button ${cobaltActive}`}
            data-value='cobalt'
            onClick={(e)=>{selectColorMode(e)}}
          >
            Cobalt
          </div>
        </div>
        <div className='fontButtonsWrap'>
          <div
            className={`button sansButton ${sansActive}`}
            onClick={() => {
              setSans();
            }}
          >
            Ag<span className='fontButtonLabel'>SANS</span>
          </div>
          <div
            className={`button serifButton ${serifActive}`}
            onClick={() => {
              setSerif();
            }}
          >
            Ag<span className='fontButtonLabel'>SERIF</span>
          </div>
        </div>
        <h1>header</h1>
        <h5>subheader</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className='bgWrap'>
          <div className='colorSwatch bg1'></div>
          <div className='colorSwatch bg2'></div>
          <div className='colorSwatch bg3'></div>
          <div className='colorSwatch bg4'></div>
          <div className='colorSwatch bg5'></div>
          <div className='colorSwatch bg6'></div>
        </div>
      </div>
    </div>
  );
}
