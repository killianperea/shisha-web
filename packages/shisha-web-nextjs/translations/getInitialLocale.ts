import { defaultLocale } from "../constants/languageConfig";

export function getInitialLocale(): string {
    const localSetting = localStorage.getItem("locale");
    if (localSetting) {
        return localSetting;
    }

    const [browserSetting] = navigator.language.split("-");
    if (browserSetting) {
        return browserSetting;
    }

    return defaultLocale;
}