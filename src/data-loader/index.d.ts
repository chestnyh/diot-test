export interface IDataLoader<Data> {

    isReady : boolean,
    setSource (path: string): void | Promise<void>,
    getData () : Data[] | Promise<Data[]>

}