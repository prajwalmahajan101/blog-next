import { MongoClient } from "mongodb";

const handler = async (req, res) => {
	const { method } = req;
	if (method === "POST") {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			return res.status(422).json({
				status: false,
				message: "InValid Inut",
			});
		}
		try {
			const client = await MongoClient.connect(process.env.DB_URL);
			const messagesCollection = client.db().collection("messages");
		} catch (err) {
			return res.status(500).json({
				status: fasle,
				message: "Could Not Connect To Database",
			});
		}

		try {
			const new_message = await messagesCollection.insertOne({
				email,
				name,
				message,
			});
		} catch (err) {
			client.close();
			return res.status(500).json({
				status: fasle,
				message: "Could Not Create the Entry In Database",
			});
		}
		client.close();

		return res.status(201).json({
			status: true,
			message: "Message Successfully stored",
			data: {
				id: new_message.insertedId,
				email,
				name,
				message,
			},
		});
	}
};

export default handler;
