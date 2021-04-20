export interface ViewState{
    dashboard: boolean,
    champions: boolean
}
export interface Champion{
    name: string,
    id: number,
    desc?: string
}