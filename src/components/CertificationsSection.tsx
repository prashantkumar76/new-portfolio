import { Certification } from "@/lib/Types"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog"
import { useState } from "react"
import { Badge } from "./ui/badge"

interface CertificationsSectionProps {
    certifications: Certification[]
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleImageClick = (cert: Certification) => {
        setSelectedCert(cert)
        setIsDialogOpen(true)
    }

    if (certifications.length === 0) return null

    return (
        <>
            <div className="pt-8">
                <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            </div>
            {certifications.map((cert) => (
                <div key={cert.id} className="relative pl-8 border-l border-border/50">
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold">{cert.name}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{cert.date}</span>
                    </div>
                    <div className="text-lg font-medium text-muted-foreground mb-4">{cert.issuer}</div>
                    <div className="flex items-center justify-between">
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div className="flex items-center justify-end gap-3 w-1/2">
                        {cert.image && (
                            <img 
                                src={cert.image} 
                                alt={cert.name}
                                className="w-16 h-16 object-contain rounded border border-border/50 bg-card/30 p-2 cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => handleImageClick(cert)}
                            />
                        )}
                    </div>
                    </div>
                </div>
            ))}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>{selectedCert?.name}</DialogTitle>
                        <DialogDescription>
                            {selectedCert?.issuer} • {selectedCert?.date}
                        </DialogDescription>
                    </DialogHeader>
                    {selectedCert?.image && (
                        <div className="flex justify-center items-center p-4 bg-muted/30 rounded-lg">
                            <img 
                                src={selectedCert.image} 
                                alt={selectedCert.name}
                                className="max-w-full max-h-[500px] object-contain rounded"
                            />
                        </div>
                    )}
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">{selectedCert?.description}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

