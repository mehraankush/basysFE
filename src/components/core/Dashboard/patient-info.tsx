import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { User, Heart, Shield, Pill, FileCheck, ClipboardList } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Patient } from './patient-display';

interface PatientDialogProps {
    patientData: Patient
}

function PatientInfo({ patientData }: PatientDialogProps) {

    return (
        <div className="grid gap-6">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg font-semibold">
                        <User className="mr-2 h-5 w-5 text-primary" />
                        Personal Information
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="/placeholder.svg?height=80&width=80" alt={patientData.name} />
                            <AvatarFallback>{patientData.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-xl font-semibold">{patientData.name}</h3>
                            <p className="text-sm text-muted-foreground">Age: {patientData.age}</p>
                            <Badge variant="secondary" className="mt-1">
                                {patientData.condition}
                            </Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg font-semibold">
                        <Shield className="mr-2 h-5 w-5 text-primary" />
                        Insurance
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                    <p><span className="font-medium">Provider:</span> {patientData.insurance.provider}</p>
                    <p><span className="font-medium">Policy Number:</span> {patientData.insurance.policyNumber}</p>
                    <p><span className="font-medium">Group Number:</span> {patientData.insurance.groupNumber}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg font-semibold">
                        <ClipboardList className="mr-2 h-5 w-5 text-primary" />
                        Medical History
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-none pl-0 grid gap-2">
                        {patientData.medicalHistory.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <Heart className="mr-2 h-4 w-4 text-destructive" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg font-semibold">
                        <Pill className="mr-2 h-5 w-5 text-primary" />
                        Treatments
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-none pl-0 grid gap-2">
                        {patientData.treatments.map((treatment, index) => (
                            <li key={index} className="flex items-center">
                                <Pill className="mr-2 h-4 w-4 text-blue-500" />
                                {treatment}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg font-semibold">
                        <FileCheck className="mr-2 h-5 w-5 text-primary" />
                        Prior Authorizations
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        {patientData.priorAuthorizations.map((auth, index) => (
                            <div key={index} className="border rounded-lg p-3">
                                <p className="font-medium">{auth.treatment}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <Badge
                                        variant={
                                            auth.status === "Approved" ? "success" :
                                                auth.status === "Denied" ? "destructive" : "default"
                                        }
                                    >
                                        {auth.status}
                                    </Badge>
                                    <p className="text-sm text-muted-foreground">
                                        {auth.insuranceResponse || "No response yet"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PatientInfo