import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// This defines the set of endpoints that this api will query for data
// baseQuery represents the base path to where the request will go. Each
// endpoint describes specific paths on that base path to send a request

export const exampleApi = createApi({
    reducerPath: 'exampleApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (id: number) => `products/${id}`
        }),
        getAllProducts: builder.query({
            query: () => "products/"
        })
    })
})

export const { useGetProductByIdQuery, useGetAllProductsQuery } = exampleApi