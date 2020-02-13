export interface IDataLoader<Data> {

    isReady : boolean,
    setSource (path: string): Promise<void>,
    getData () : Promise<Data[]>

}