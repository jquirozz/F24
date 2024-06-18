import "./Settings.scss";

const DARK = "#222";
const LIGHT = "#f5f5f5";

function Settings({ setTheme }) {
  const THEMES = [
    { color: LIGHT, backgroundColor: DARK },
    { color: DARK, backgroundColor: LIGHT },
  ];

  const handleTheme = (theme) => setTheme(theme);

  return (
    <div className="Settings">
      <button onClick={() => handleTheme(THEMES[0])}>DARK</button>
      <button onClick={() => handleTheme(THEMES[1])}>LIGHT</button>
    </div>
  );
}

export default Settings;
