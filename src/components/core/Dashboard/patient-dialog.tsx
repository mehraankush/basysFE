"use client"
import React, { useState } from 'react'
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Patient } from './patient-display'
import { Button } from '@/components/ui/button';
import PatientInfo from './patient-info'
import { AuthorizationRequestForm } from './authorization-form'
import { PlusCircle } from 'lucide-react'

interface PatientDialogProps {
    patientData: Patient;
}

const PatientDialog: React.FC<PatientDialogProps> = ({
    patientData
}) => {

    const [showAuthForm, setShowAuthForm] = useState(false);

    return (
        <DialogContent className="sm:max-w-[700px] max-h-[90vh]">
            <DialogHeader>
                <div className='flex justify-between items-center w-full'>
                    <DialogTitle className="text-2xl font-bold">Patient Information</DialogTitle>
                    <Button onClick={() => setShowAuthForm(!showAuthForm)} className='mr-3'>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        {showAuthForm ? "Hide Form" : "New Auth Request"}
                    </Button>
                </div>
            </DialogHeader>
            <ScrollArea className="max-h-[calc(90vh-100px)] pr-4">
                {showAuthForm ? (
                    <AuthorizationRequestForm
                        patientId={patientData._id}
                        onCancel={() => setShowAuthForm(false)}
                    />
                ) : (
                    <PatientInfo
                        patientData={patientData}
                    />
                )}
            </ScrollArea>
        </DialogContent>
    )
}

export default PatientDialog