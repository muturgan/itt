export class DailyRoutineItemModel {
  private _active: boolean;
  private _index: number;
  private _img: string;
  private _duration: string;
  private _description: string;

  constructor ( item: {active: boolean, index: number, img: string, duration: string, description: string} ) {
    this.active = item.active;
    this.index = item.index;
    this.img = item.img;
    this.duration = item.duration;
    this.description = item.description;
  }

  public get active() {
    return this._active;
  }

  public set active(value: boolean) {
    this._active = value;
  }

  public get index() {
    return this._index;
  }

  public set index(value: number) {
    this._index = value;
  }

  public get img() {
    return this._img;
  }

  public set img(value: string) {
    this._img = value;
  }

  public get duration() {
    return this._duration;
  }

  public set duration(value: string) {
    this._duration = value;
  }

  public get description() {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}
