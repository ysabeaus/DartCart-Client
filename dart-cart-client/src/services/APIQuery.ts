import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// This defines the set of endpoints that this api will query for data
// baseQuery represents the base path to where the request will go. Each
// endpoint describes specific paths on that base path to send a request






// export const StoreAPI = createApi({
//     reducerPath: 'StoreAPI',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io' }),
//     endpoints: (builder) => ({
//         getShopProductById: builder.query({
//             query: (id: number) => `/ShopProduct/${id}`
//         }),
//         getAllShopProducts: builder.query({
//             query: () => "/ShopProduct"
//         })
//     })
// })

// export const { useGetShopProductByIdQuery, useGetAllShopProductsQuery } = StoreAPI
// useGetShopProductByIdQuery AND useGetAllShopProductsQuery are @@@@@@@ A U T O - G E N E R A T E D @@@@@@@@ functions that come directly from
// getShopProductById AND getAllShopProducts ENDPOINT names respectively. Their format is dynamic camelcode based on what you call the ENDPOINT builders