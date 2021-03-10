import { BrandDto } from "./brand.dto";
import { FlavorDto } from "./flavor.dto";
import { ImageDto } from "./image.dto";
import { TranslatedTextDto } from "./translateText.dto";

export interface TabaccoDto {
    brand: BrandDto;
    description: TranslatedTextDto;
    flavors: FlavorDto[];
    image: ImageDto;
    name: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}