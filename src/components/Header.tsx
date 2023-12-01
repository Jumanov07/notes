interface Props {
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  darkMode: boolean;
}

const Header = ({ setDarkMode, darkMode }: Props) => {
  const toggleDarkMode = (): void => setDarkMode((prev) => !prev);

  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={toggleDarkMode}
        className={`${darkMode ? "dark" : "light"}`}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
