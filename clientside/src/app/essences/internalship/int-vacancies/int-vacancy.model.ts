export class VacancyModel {
  private _img: string;
  private _position_str1: string;
  private _position_str2: string = '';
  private _salary: string;
  private _experience: string;
  private _internship: string;

  constructor ( item: {
    img: string,
    position_str1: string,
    position_str2?: string,
    salary: string,
    experience: string,
    internship: string}
  ) {
    this.img = item.img;
    this.position_str1 = item.position_str1;
    this.position_str2 = item.position_str2;
    this.salary = item.salary;
    this.experience = item.experience;
    this.internship = item.internship;
  }

  public get img() {
    return this._img;
  }
  public set img(value: string) {
    this._img = value;
  }

  public get position_str1() {
    return this._position_str1;
  }
  public set position_str1(value: string) {
    this._position_str1 = value;
  }

  public get position_str2() {
    return this._position_str2;
  }
  public set position_str2(value: string) {
    this._position_str2 = value;
  }

  public get salary() {
    return this._salary;
  }
  public set salary(value: string) {
    this._salary = value;
  }

  public get experience() {
    return this._experience;
  }
  public set experience(value: string) {
    this._experience = value;
  }

  public get internship() {
    return this._internship;
  }
  public set internship(value: string) {
    this._internship = value;
  }
}
