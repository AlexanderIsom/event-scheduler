import { Event } from '../types'
import styles from '../styles/Components/EventBanner.module.scss'
import Link from 'next/link'
import { format } from 'date-fns'
import { formatDateRange } from "utils/TimeUtils"
import { useEffect } from 'react'

interface Props {
  event: Event
}

export default function EventBanner({ event }: Props) {
  return (
    <Link href={'/Events/id/' + event.id} className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.colorStrip} style={{ backgroundColor: `${event.color}` }} />
        <div className={styles.informationContainer}>
          <div className={styles.title}>
            {event.title}
          </div>
          <div className={styles.host}>
            {event.user.name}
          </div>
          <div className={styles.time}>
            {formatDateRange(new Date(event.startDateTime), new Date(event.endDateTime))}
          </div>
        </div>
      </div>
    </Link>
  )
}
