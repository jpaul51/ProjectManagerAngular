import { UserAccount } from "./user-account"

export class LockEntity {

    id: number
    entityId: number
    clazzName: string
    lockDateTime: Date
    lockUser: UserAccount

}
