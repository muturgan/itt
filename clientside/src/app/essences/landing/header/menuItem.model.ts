export class MenuItemModel {
    name: string;
    link?: string;
    href?: string;

    /*TODO: all data for landing goes here*/
    constructor ( _item: {_name: string, _link?: string, _href?: string} ) {
      this.name = _item._name;
      this.link = _item._link;
      this.href = _item._href;
    }
}
