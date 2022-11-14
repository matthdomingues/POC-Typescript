export type ListEntity = {
    id: number,
    item: string,
    unidade: number,
    descrição?: string,
    comprado?: boolean
};

export type List = Omit<ListEntity, "id">;

export type ParamsId = {
    id?: number
}