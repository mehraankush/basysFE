"use client"
import React, { useState } from 'react'
import { TabsContent } from '@/components/ui/tabs'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useGetAllPatients } from "@/services/PatientsService"
import DiaplayPatients from './patient-display'


const PatientComponent = ({
    currentTab
}: {
    currentTab: string
}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const { data: patientsData, isLoading } = useGetAllPatients(currentTab, currentPage);

    const patients = patientsData?.patients || []
    const totalPages = patientsData?.pagination?.totalPages || 1

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <Card className="w-full overflow-y-auto">

            <CardHeader className="flex flex-row justify-between w-full  p-3 pt-5 px-6">
                <div className="flex flex-col justify-center  ">
                    <CardTitle>All Registered Patients</CardTitle>
                    <CardDescription>
                        These are the people that we need to take care of.
                    </CardDescription>
                </div>

                {/* pagination  */}
                <CardContent className="flex justify-center p-0">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className='cursor-pointer'
                                />
                            </PaginationItem>
                            {[...Array(totalPages)].map((_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        onClick={() => handlePageChange(index + 1)}
                                        isActive={currentPage === index + 1}
                                        className='cursor-pointer'
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className='cursor-pointer'
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardContent>

            </CardHeader>

            <TabsContent value="all">
                <CardContent className="p-0">
                    <DiaplayPatients
                        isLoading={isLoading}
                        patients={patients}
                    />
                </CardContent>
            </TabsContent>

            <TabsContent value="pending" >
                <CardContent className="p-0">
                    <DiaplayPatients
                        isLoading={isLoading}
                        patients={patients}
                    />
                </CardContent>
            </TabsContent>

            <TabsContent value="approved">
                <CardContent className="p-0">
                    <DiaplayPatients
                        isLoading={isLoading}
                        patients={patients}
                    />
                </CardContent>
            </TabsContent>

            <TabsContent value="denied">
                <CardContent className="p-0">
                    <DiaplayPatients
                        isLoading={isLoading}
                        patients={patients}
                    />
                </CardContent>
            </TabsContent>

        </Card>
    )
}

export default PatientComponent