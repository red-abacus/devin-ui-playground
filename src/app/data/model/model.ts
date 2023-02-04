export class MyModel {
    public type = 'my-model';

    public id: number;
    public someString: string;
    public someSelectable: any;
    public someBoolean: boolean;
    public someArray: string[];
    public someAutocompleteField: string;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.someString = obj.someString;
        this.someSelectable = obj.someSelectable;
        this.someArray = obj.someArray || [];
        this.someBoolean = obj.someBoolean || '';
        this.someAutocompleteField = obj.someAutocompleteField || '';
    }
}