import { SANITY_QUERIES } from "../constants/sanityQueries.enum";
import { CookiesConsientDto } from "../dto/CookiesConsient.dto";
import { MenuItemDto } from "../dto/menuItem.dto";
import { CookiesConsientModel } from "../models/CookiesConsient.model";
import { MenuItemModel } from "../models/MenuItemModel";
import sanityClient from "./sanityClient";

async function getMenuItems(): Promise<MenuItemModel[]> {
    return new Promise<MenuItemModel[]>((resolve, reject) => {
        sanityClient.fetch<MenuItemDto[]>(SANITY_QUERIES.GET_MENU_FROM_SANITY).then(result => {
            const itemsMapped: MenuItemModel[] = []
            result.forEach(menuItemDto => {
                itemsMapped.push(_mapMenuItemsDtoToModel(menuItemDto));
            })
            resolve(itemsMapped);
        }, () => {
            console.error('ERROR: System not able to get MenuItems')
            reject();
        });
    });
}

async function getCookiesConsient(): Promise<CookiesConsientModel> {
    return new Promise<CookiesConsientModel>((resolve, reject) => {
        sanityClient.fetch<CookiesConsientDto>(SANITY_QUERIES.GET_COOKIES_CONSIENT).then(result => {
            resolve(_mapCookiesConsientDtoToModel(result))
        }, () => {
            console.error('ERROR: System not able to get MenuItems')
            reject();
        });
    });
}


function _mapMenuItemsDtoToModel(dto: MenuItemDto): MenuItemModel {
    const item = new MenuItemModel();
    item.name = dto.name;
    item.path = dto.path;
    return item;
}

function _mapCookiesConsientDtoToModel(dto: CookiesConsientDto) {
    const item = new CookiesConsientModel();
    item.text = dto.text;
    item.button = dto.button;
    return item;
}


export const SanityApi = {
    getMenuItems: getMenuItems,
    getCookiesConsient: getCookiesConsient
}