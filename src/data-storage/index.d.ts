import {IReport} from "../reports";

export interface IDataStorage<Data> {

    isReady: boolean,
    insert(data: any): Promise<Data | IReport>
    update(where: any, data: any): Promise<void>,
    select(where: any): Promise<Data>
    delete(where: any): Promise<void>
    
}
