import classes from "@/styles/contact/contact-form.module.css";
import { useRef } from "react";
const ContactForm = () => {
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	const onSubmitHandler = async (evt) => {
		evt.preventDefault();
		const formData = {
			email: emailRef.current.value,
			name: nameRef.current.value,
			message: messageRef.current.value,
		};
		const res = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		console.log(data);
	};

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
		</section>
	);
};
export default ContactForm;
