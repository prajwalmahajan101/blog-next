import { useEffect, useRef, useState } from "react";

import Notification from "../ui/notification";

import classes from "@/styles/contact/contact-form.module.css";

const ContactForm = () => {
	const [reqStatus, setReqStatus] = useState();
	const [error, setError] = useState();
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	useEffect(() => {
		if (reqStatus === "success" || reqStatus === "error") {
			const timer = setTimeout(() => {
				setReqStatus();
				setError();
			}, 3000);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [reqStatus]);

	const sendMessageHandler = async (formData) => {
		const res = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		if (!res.ok) {
			throw new Error(data.message || "Something Went Wrong");
		}
	};

	const onSubmitHandler = async (evt) => {
		evt.preventDefault();
		const formData = {
			email: emailRef.current.value,
			name: nameRef.current.value,
			message: messageRef.current.value,
		};
		setReqStatus("pending");
		try {
			await sendMessageHandler(formData);
			setReqStatus("success");
		} catch (err) {
			setError(err.message);
			setReqStatus("error");
		}
	};

	let notification;
	if (reqStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending Message...",
			message: "Please Wait Will we Connect You to Prajwal",
		};
	} else if (reqStatus === "success") {
		notification = {
			status: "success",
			title: "Success!!",
			message: "Message Sent!! Prajwal Will reply to you Shortly",
		};
	} else if (reqStatus === "error") {
		notification = {
			ststus: "error",
			title: "Error will sending the message",
			message: error,
		};
	}

	return (
		<section className={classes.contact}>
			<h1>How Can I help You???</h1>
			<form className={classes.form} onSubmit={onSubmitHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							ref={emailRef}
							required
						></input>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							ref={nameRef}
							required
						></input>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						rows={5}
						id="message"
						ref={messageRef}
						required
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && <Notification {...notification} />}
		</section>
	);
};
export default ContactForm;
