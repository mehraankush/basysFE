"use client"
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

import OverallStatus from "@/components/core/Dashboard/overall-status"
import PatientComponent from "@/components/core/Dashboard/patient-component"


export default function DashboardPage() {

    const [currentTab, setCurrentTab] = useState("all")

    const handleTabChange = (value: string) => {
        setCurrentTab(value)
    }

    return (
        <main className="h-full md:max-h-[calc(95vh-40px)] max-w-[1380px] mx-auto overflow-auto md:overflow-hidden flex-col md:flex">

            <div className="flex-1 space-y-4 p-8 pt-6">

                <Tabs
                    value={currentTab}
                    onValueChange={handleTabChange}
                    defaultValue="all"
                    className="space-y-4"
                >

                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="pending">
                            Pending
                        </TabsTrigger>
                        <TabsTrigger value="approved">
                            Approved
                        </TabsTrigger>
                        <TabsTrigger value="denied">
                            Denied
                        </TabsTrigger>
                    </TabsList>
                    {/* over all status  */}
                    <OverallStatus />

                    <div className="flex w-full overflow-hidden">
                        <PatientComponent
                            currentTab={currentTab}
                        />
                    </div>

                </Tabs>
            </div>

        </main>
    )
}