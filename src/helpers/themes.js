export const calculateSettingAsThemeString = ({ localStorageTheme, systemSettingDark }) => {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
}

  
export const updateThemeOnHtmlEl = ({ theme }) => {
    document.querySelector("html").setAttribute("data-theme", theme);
}
  