import { SANITY_QUERIES } from "../constants/sanityQueries.enum";
import { MenuItemDto } from "../dto/menuItem.dto";
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
        })

    })
}


function _mapMenuItemsDtoToModel(dto: MenuItemDto): MenuItemModel {
    const item = new MenuItemModel();
    item.name = dto.name
    item.path = dto.path
    return item;
}


export const SanityApi = {
    getMenuItems: getMenuItems
}