import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const PatientDisplaySkeleton = () => {
    return (
        <div className="space-y-4">
            <div className="relative px-5">
                <Search className="absolute left-7 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search patients..."
                    className="pl-8"
                    disabled
                />
            </div>
            <ScrollArea className="h-[calc(100vh-430px)] w-full">
                <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <PatientCardSkeleton key={index} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

const PatientCardSkeleton = () => {
    return (
        <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-2/3" />
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <Skeleton className="h-4 w-16 mb-1" />
                        <Skeleton className="h-3 w-24" />
                    </div>
                    <div className="text-right">
                        <Skeleton className="h-4 w-20 mb-1" />
                        <Skeleton className="h-3 w-12" />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                        {[...Array(3)].map((_, index) => (
                            <Skeleton key={index} className="h-5 w-20" />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PatientDisplaySkeleton