import { TranslatedTextDto } from "./translateText.dto";

export interface CookiesConsientDto {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
    button: string,
    text: TranslatedTextDto
}