"use client"

import { useMutation, useQuery } from "react-query"
import { createPriorAuth, getAllPatients, getAuthStatus } from "./PatienstApis"

export const useGetAllPatients = (currentTab: string, currentPage:number) => {
    return useQuery({
        queryKey: ['allPatients', { currentTab, currentPage }],
        queryFn: () => getAllPatients(currentTab, currentPage)
    })
}

export const useGetAuthStatus = () => {
    return useQuery({
        queryKey: ['getAuthStatus'],
        queryFn: getAuthStatus
    })
}

export const useCreatePriorAuth = () => {
    return useMutation({
        mutationKey: ['createPriorAuth'],
        mutationFn: createPriorAuth
    })
}
