export interface IDataStorage<Data> {

    isReady: boolean,
    insert(data: any): Promise<void> | void,
    update(where: any, data: any): Promise<void> | void,
    select(where: any): Promise<Data> | Data,
    delete(where: any): Promise<void> | void
    
}
