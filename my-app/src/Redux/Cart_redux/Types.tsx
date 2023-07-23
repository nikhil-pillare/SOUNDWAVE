export interface Cart_item{
    id:number,
    cartImage:string,
    price:number,
    currency?:string,
    name:string,
    description:string,
    quantity:number

}
export interface Target{
    id:number,
    quantiy:number
}
export interface Cart_state{
    cart:Cart_item[],
    total_amount:number
}
export type Cart_actions = {
    type:string,
    item:Cart_item
}
export type DispatchType = (args: Cart_actions)=>Cart_actions