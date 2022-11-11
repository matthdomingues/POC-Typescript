export type ListEntity = {
    id: number,
    item: string,
    unidade: number,
    descrição?: string
};

export type List = Omit<ListEntity, "id">;

export type UpdateList = Partial<List>;

export type ParamsId = {
    id?: number
}