import { Action } from "./action";
import { DetailManager } from "./detail-manager";
import { FieldDetail } from "./field-detail";
import { TableManager } from "./table-manager";

export class Application {

        appName: string;
        appLabelKey: string;
        appEntityKey: string;
        dlManager: DetailManager;

        tlManager: TableManager;
        appPathLoc: string;
        action: Array<Action>;
        mainEntity: string
        noTable: boolean;
        apppath: string
        allFields: FieldDetail[] = []




}
