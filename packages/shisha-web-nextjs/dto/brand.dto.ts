import { ImageDto } from "./image.dto";
import { TabaccoDto } from "./tabacco.dto";

export interface BrandDto {
    image: ImageDto;
    name: string;
    tabaccos: TabaccoDto[];
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}