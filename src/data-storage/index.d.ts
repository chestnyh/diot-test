export interface DataStorage {

    isReady: boolean,
    insert(data: any): void,
    update(where: any, data: any): void,
    select(where: any): any,
    delete(where: any): any
    
}