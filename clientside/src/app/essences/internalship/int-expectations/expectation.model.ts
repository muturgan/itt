export class ExpectationModel {
  private _term: string;
  private _definition: string;

  constructor ( item: {term: string, definition: string} ) {
    this.term = item.term;
    this.definition = item.definition;
  }

  public get term() {
    return this._term;
  }

  public set term(value: string) {
    this._term = value;
  }

  public get definition() {
    return this._definition;
  }

  public set definition(value: string) {
    this._definition = value;
  }
}
