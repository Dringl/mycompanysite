const STORAGE_KEY = "hs_theme";

export type ThemePreference = "light" | "dark" | "auto";
export type EffectiveTheme = "light" | "dark";

export function resolveAutoThemeByHour(date = new Date()): EffectiveTheme {
  const hour = date.getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

export function getStoredThemePreference(): ThemePreference | null {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "light" || value === "dark" || value === "auto"
    ? value
    : null;
}

export function getEffectiveTheme(
  preference: ThemePreference | null,
  date = new Date(),
): EffectiveTheme {
  if (preference === "light" || preference === "dark") return preference;
  return resolveAutoThemeByHour(date);
}

export function applyTheme(theme: EffectiveTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export function saveManualTheme(theme: EffectiveTheme) {
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function clearStoredThemePreference() {
  window.localStorage.removeItem(STORAGE_KEY);
}
