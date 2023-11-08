"use client"
import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useLogStore } from '@/store/index'
import { cn } from '@/lib/utils'

export default function Logs() {
    const logs = useLogStore((state) => state.logs)
    return (
        <div>
            <Table className='border'>
                <TableCaption>List of logs</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-1/3">Date</TableHead>
                    <TableHead className="w-1/3">hour</TableHead>
                    <TableHead className="w-1/3">Note</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.keys(logs).map((key) => {
                        const log = logs[key];
                        return (
                            <TableRow
                                key={key}
                                className={cn(
                                    log.hour <= 4 ? "bg-red-100" : "" 
                                    )}
                            >
                                <TableCell className="font-medium">
                                    {log.date.toDateString()}
                                </TableCell>
                                <TableCell>{log.hour}</TableCell>
                                <TableCell>{log.note}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}