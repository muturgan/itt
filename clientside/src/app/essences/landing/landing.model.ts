import { MenuItemModel } from './header/menuItem.model';

export class LandingModel {
    phone: string;
    email: string;
    menu: MenuItemModel[];

    /*TODO: all data for landing goes here*/
    constructor (_phone: string,  _email: string, _menu: MenuItemModel[]) {
      this.phone = _phone;
      this.email = _email;
      this.menu  = _menu;
    }
}
