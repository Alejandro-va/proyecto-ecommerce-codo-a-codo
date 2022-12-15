export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      "name": e.target["name"].value,
      "email": e.target["email"].value,
      "message": e.target["message"].value
    }
    // TODO handle contact information, send email with some tool, etc
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" placeholder="John Doe" />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" placeholder="personal@email.com" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="I wanna know..."></textarea>
    </form>
  )
}

export default ContactForm;