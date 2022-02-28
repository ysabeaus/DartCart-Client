import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// This defines the set of endpoints that this api will query for data
// baseQuery represents the base path to where the request will go. Each
// endpoint describes specific paths on that base path to send a request

export const ShopProductAPI = createApi({
    reducerPath: 'ShopProductAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io' }),
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (id: number) => `/ShopProduct/${id}`
        }),
        getAllProducts: builder.query({
            query: () => "/ShopProduct"
        })
    })
})

export const { useGetProductByIdQuery, useGetAllProductsQuery } = ShopProductAPI