import * as z from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { authorizationRequestSchema } from "../../../../schems/authorization"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useCreatePriorAuth } from "@/services/PatientsService"
import { useToast } from "@/hooks/use-toast"
import { queryClient } from "@/Providers/ReactQuery"


interface AuthorizationRequestFormProps {
    patientId: string
    onCancel: () => void
}

export function AuthorizationRequestForm({
    patientId,
    onCancel
}: AuthorizationRequestFormProps) {
    const { mutate } = useCreatePriorAuth();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof authorizationRequestSchema>>({
        resolver: zodResolver(authorizationRequestSchema),
        defaultValues: {
            treatment: "",
            doctorNotes: "",
            dateOfService: "",
            insurancePlan: "",
            diagnosisCode: "",
        },
    })


    function onSubmit(values: z.infer<typeof authorizationRequestSchema>) {
        mutate({ patientId, ...values }, {
            onSuccess: () => {
                toast({
                    title: "Patient register for prior authorization",
                    description: new Date().toLocaleString(),
                })
                queryClient.invalidateQueries(["allPatients"])
                form.reset();
                onCancel();
            },
            onError: (error) => {
                console.log("ERROR", error)
            }
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>New Authorization Request</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="treatment"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Treatment</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="doctorNotes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Doctor Notes</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dateOfService"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date of Service</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="insurancePlan"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Insurance Plan</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="diagnosisCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Diagnosis Code</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end space-x-2">
                            <Button type="button" variant="outline" onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button type="submit">Submit Request</Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}