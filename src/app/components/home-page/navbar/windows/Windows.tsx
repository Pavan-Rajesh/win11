'use client'
import React, { ComponentProps } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogOverlay
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as motion from "motion/react-client"


const Windows = ({ ...props }: ComponentProps<"div">) => {
    return (
        <>

            <Dialog modal={false}>
                <DialogTrigger asChild>

                    {/* window button used to control the dialog */}
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <div className='p-2 rounded-md hover:backdrop-blur-lg' {...props}>
                            <Image src='/assets/icons/windows.svg' alt='windows-logo' width={23} height={23} />
                        </div>
                    </motion.div>


                </DialogTrigger>

                <DialogContent className="data-[state=open]:animate-slide-in-from-top data-[state=closed]:animate-slide-out-to-bottom z-0" overlay={<DialogOverlay className='bg-transparent z-10' />}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" className=" col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog >


        </>
    )
}

export default Windows