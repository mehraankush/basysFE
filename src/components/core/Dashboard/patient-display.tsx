
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Search, User, Heart, Calendar, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"


interface PriorAuthorization {
    treatment: string;
    status: 'Pending' | 'Approved' | 'Denied';
    insuranceResponse: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
}

// Define type for Insurance
interface Insurance {
    provider: string;
    policyNumber: string;
    groupNumber: string;
}

// Define type for Patient
export interface Patient {
    _id: string;
    name: string;
    age: number;
    condition: string;
    medicalHistory: string[];
    treatments: string[];
    priorAuthorizations: PriorAuthorization[];
    insurance: Insurance;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface RecentSalesProps {
    isLoading: boolean;
    patients: Patient[];
}
import React, { useState } from 'react'
import PatientDialog from "./patient-dialog";
import PatientDisplaySkeleton from "@/components/common/patient-skeleton";

const DiaplayPatients: React.FC<RecentSalesProps> = ({
    isLoading,
    patients
}) => {
    const [searchTerm, setSearchTerm] = useState("")

    if (isLoading) {
        return <PatientDisplaySkeleton />
    }

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-4">
            <div className="relative px-5">
                <Search className="absolute left-7 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search patients..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <ScrollArea className="h-[calc(100vh-430px)] w-full">
                <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPatients.map((patient) => (
                        <PatientCard
                            key={patient._id}
                            patient={patient}
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}


function PatientCard({
    patient
}: {
    patient: Patient
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="cursor-pointer transition-all hover:shadow-md">
                    <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src="/avatars/01.png" alt={patient.name} />
                                <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                                <h3 className="text-lg font-semibold">{patient.name}</h3>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <User className="mr-1 h-4 w-4" />
                                    <span>Age: {patient.age}</span>
                                    <Heart className="ml-2 mr-1 h-4 w-4" />
                                    <span>{patient.condition}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium flex items-center">
                                    <Shield className="mr-1 h-4 w-4" />
                                    Insurance
                                </p>
                                <p className="text-xs text-muted-foreground">{patient.insurance.provider}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium flex items-center justify-end">
                                    <Calendar className="mr-1 h-4 w-4" />
                                    Prior Auths
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {patient.priorAuthorizations.length} total
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                                {patient.priorAuthorizations.map((auth) => (
                                    <Badge
                                        key={auth._id}
                                        variant={
                                            auth.status === "Approved"
                                                ? "success"
                                                : auth.status === "Denied"
                                                    ? "destructive"
                                                    : "default"
                                        }
                                    >
                                        {auth.treatment}: {auth.status}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <PatientDialog
                patientData={patient}
            />
        </Dialog>
    )
}

export default DiaplayPatients
