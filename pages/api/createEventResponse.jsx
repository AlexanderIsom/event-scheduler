import { prisma } from "../../lib/db";

const createEventResponse = async (req, res) => {
	try {
		const { eventId, userId, schedule } = req.body;
		const newEvent =
		{
			eventId: eventId,
			userId: userId,
			schedule: schedule,
		}

		const newResponse = await prisma.eventResponse.create({ data: newEvent });
		return res.status(200).json(newResponse)
	} catch (e) {
		console.error(e);
		throw new Error(e).message;
	}
};

export default createEventResponse;
