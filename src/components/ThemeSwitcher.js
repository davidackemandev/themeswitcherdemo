import React, { useState } from 'react';

export default function ThemeSwitcher(props) {
  const [fontActive, setFontActive] = useState(()=>{
    const initValue = typeof window !== 'undefined' && localStorage.getItem('font-mode');
    return initValue !== null ? initValue : 'sans';
  });
  const [colorMode, setColorMode] = useState(() => {
    const initValue = typeof window !== 'undefined' && localStorage.getItem('color-mode');
    return initValue !== null ? initValue : 'light';
  });
  
  const sansActive = fontActive === 'sans' ? 'active' : '';
  const serifActive = fontActive === 'serif' ? 'active' : '';
  const themeSelectOpenClass = props.themeSelectOpen ? 'active' : '';

  const selectColorMode = (e) => {
    const value = e.target.value;
    document.documentElement.setAttribute('color-mode', value);
    localStorage.setItem('color-mode', value);
    setColorMode(value);
    return;
  };
  const setSans = ()=>{
    document.documentElement.setAttribute('font-mode', 'sans');
    localStorage.setItem('font-mode', 'sans');
    setFontActive('sans');
  }
  const setSerif = ()=>{
    document.documentElement.setAttribute('font-mode', 'serif');
    localStorage.setItem('font-mode', 'serif');
    setFontActive('serif');
  }
  
  return (
    typeof window !== 'undefined' ?
    <>
    <div className="themeSelectOuterWrap">
      <div className={`themeSelectWrap ${themeSelectOpenClass}`}>
      <select
        onChange={(e) => {
          selectColorMode(e);
        }}
        value={colorMode ? colorMode : 'light'}
      >
        <option value='light'>Light</option>
        <option value='solarized'>Solarized</option>
        <option value='dark'>Dark</option>
        <option value='cobalt'>Cobalt</option>
      </select>
      <div className={`fontModeButton sansButton ${sansActive}`} onClick={()=>{setSans()}}>Ag<span className="fontButtonLabel">SANS</span></div>
      <div className={`fontModeButton serifButton ${serifActive}`} onClick={()=>{setSerif()}}>Ag<span className="fontButtonLabel">SERIF</span></div>
      </div>
   </div>
   <div className={`clickMeOverlay ${themeSelectOpenClass}`}
   onClick={()=>{props.setThemeSelectOpen(!props.themeSelectOpen)}}
   ></div>
   </>
   : 
   <></>
  );
}
