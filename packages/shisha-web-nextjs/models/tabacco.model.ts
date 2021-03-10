import { BrandModel } from "./Brand.model";
import { FlavorModel } from "./Flavor.model";
import { TranslatedTextModel } from "./TranslatedText.model";

export class TabaccoModel {
    brand: BrandModel;
    description: TranslatedTextModel;
    flavors: FlavorModel[];
    image: string;
    name: string;
}