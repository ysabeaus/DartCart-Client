// Define Product type so that createEntityAdapter can infer the type correctly
export interface Product {
    id: number,
    name: string,
    ordered: boolean
}