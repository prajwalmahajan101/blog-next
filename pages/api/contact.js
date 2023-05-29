const handler = (req, res) => {
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

		return res.status(201).json({
			status: true,
			message: "Message Successfully stored",
			data: {
				email,
				name,
				message,
			},
		});
	}
};

export default handler;
