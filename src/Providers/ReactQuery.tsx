"use client";

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

export const queryClient = new QueryClient()

import React from 'react'

const ReactQuery = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQuery;