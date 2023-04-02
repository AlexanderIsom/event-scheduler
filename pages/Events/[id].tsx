import { prisma } from "../../lib/db";
import { Event, EventResponse } from "../../types/Events"
import TimelineContainer from "../../components/TimelineContainer";
import { useSession } from "next-auth/react";
import styles from "../../styles/id.module.scss"
import { differenceInHours, format, parseISO } from "date-fns";
import CreateTimeline from "../../utils/TimelineUtils"
import TimelineNumbers from "../../components/TimelineNumber";

interface EventProps {
	event: Event
	eventResponses: EventResponse[];
}

export default function ViewEvent({ event, eventResponses }: EventProps) {
	const { data: session } = useSession();
	const timeline = CreateTimeline({ start: event.startDateTime, end: event.endDateTime })
	const sessionUserResponses = eventResponses.filter(event => event.userId == session?.user.id)

	return (<>
		<div style={{ height: "100%", minHeight: "800px" }} className={styles.wrapper}>
			<div>users</div>
			<div className={styles.scrollable} >
				<TimelineNumbers />
				{sessionUserResponses.map((eventResponse: EventResponse, index: number) => {
					return <TimelineContainer key={index} event={eventResponse} timeline={timeline} />
				})}
			</div>

			<div style={{ background: "blue" }}>
				<h1>{event.title}</h1>
				<h2>{event.userId}</h2>
				<h2>{format(parseISO(event.startDateTime, { additionalDigits: 0 }), "dd/mm/yy HH:mm")}</h2>
				<h2>{format(parseISO(event.endDateTime, { additionalDigits: 0 }), "dd/mm/yy HH:mm")}</h2>
			</div>
		</div>
	</>)
}

export async function getServerSideProps({ params }: any) {
	try {
		const event = await prisma.event.findUnique({
			where: {
				id: params.id
			}
		});

		const eventReseponses = await prisma.eventResponse.findMany({
			where: {
				eventId: params.id
			}
		})

		return {
			props: { event: JSON.parse(JSON.stringify(event)) as Event, eventResponses: JSON.parse(JSON.stringify(eventReseponses)) as EventResponse[] },
		};
	} catch (e) {
		console.error(e);
	}
}
