import dayjs from "dayjs"

export const firtDayOfWeek = dayjs().startOf('week').toDate()
export const lastDayOfWeek = dayjs().endOf('week').toDate()