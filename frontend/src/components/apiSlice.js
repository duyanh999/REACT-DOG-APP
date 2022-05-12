import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Todos','Roles'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Todos']
        }),
        getRoles: builder.query({
            query: () => '/role',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Roles']
        }),
        addRole: builder.mutation({
            query: (todo) => ({
                url: '/role',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Roles']
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Todos']
        }),
        deleteRole: builder.mutation({
            query: ({ id }) => ({
                url: `/role/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Roles']
        }),
    })
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
    useGetRolesQuery,
    useAddRoleMutation,
    useDeleteRoleMutation
} = apiSlice
