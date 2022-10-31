import { Params } from "@/usecases/ports/type_token";

export interface Token{
    generate (params: Params): Promise<string>
    verify (token: String): Promise<boolean>
}