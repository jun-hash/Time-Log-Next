import React from 'react'
import dayjs from "dayjs"

export default function Calendar() {

    function getDateInMonth(year = dayjs().year(), month=dayjs().month
    ()) {
        const startDate = dayjs().year(year).month(month).date(1)
        const endDate = startDate.endOf("month")

        const dateArray = []

        for(let i = startDate.date(); i <= endDate.date(); i ++){
            dateArray.push(startDate.date(i).format("YYYY-MM-DD"));
        }
        console.log(dateArray)

        return dateArray

    }

    getDateInMonth();

    return (
        <div>
            {getDateInMonth().map(value,index)}
                return
        </div>
    )
}