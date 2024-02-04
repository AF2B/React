import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
    email: string,
    password: String
}

export interface Authentication {
    auth(params: AuthenticationParams): Promise<AccountModel>
}