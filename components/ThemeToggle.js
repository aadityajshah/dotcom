// components/ThemeToggle.js

import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const ToggleButton = styled.button`
  --toggle-padding: 36px;
  display: flex;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  cursor: pointer;
  background-color:transparent;
  text-align:left;
  color:white;
`
const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState("dark");
    const inactiveTheme = activeTheme == "dark" ? "light" : "dark";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme])
  return (
    <ToggleButton type="button"
        onClick={() => setActiveTheme(inactiveTheme)}
        activeTheme={activeTheme} >
      <FontAwesomeIcon icon={faLightbulb} height="28" padding="15" />
    </ToggleButton>
  )
}

export default ThemeToggle;