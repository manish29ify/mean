export interface Products {
    message: string
    data: Product[]
}

export interface Product {
    _id: string
    name: string
    description: string
    category: string
    price: number
    image: string
    createdAt: string
    updatedAt: string
    __v: number
}