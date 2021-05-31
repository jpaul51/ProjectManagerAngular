import { FieldDetail } from "./field-detail";

export class Action {


    updates : FieldUpdates;
   

}

class FieldUpdates {
    field : FieldDetail;
    change: object
}

export enum ActionType {
    SUBMIT,
    DELETE,
    CANCEL,
    CHANGE
}
