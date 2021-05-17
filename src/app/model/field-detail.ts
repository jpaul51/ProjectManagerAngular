export class FieldDetail {

    type: FIELD_TYPE
    name: string
    translationKey: string
    entityDescriptor: string
    readOnly: false
    hidden: false
    fontColor: string
    bgColor: string
    defaultValue: string
    valueHidden: false

}

export enum FIELD_TYPE {
    TEXT_INPUT, TEXT_AREA, SELECT,
}
