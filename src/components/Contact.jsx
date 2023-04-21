function Contact() {

  return (
    // < !--Contacts -- >
    <section id="contacts">
      {/* <!-- First Panel--> */}
      <div className="contacts-item" id="contacts-1">
        <h2>Contact Me</h2>
        <div id="contacts-img-container">
          <a href="mailto:dan320so@gmail.com"><img src="./images/contacts/gmail.svg" alt="The Logo of Mail" /></a>
          <a href="https://www.linkedin.com/in/daniel-so-8054b5154/" target="_blank"><img src="./images/contacts/linkedin.svg" alt="The Logo of Linkedin" /></a>
          <a href="https://github.com/Daniel320So" target="_blank"><img src="./images/contacts/github.svg" alt="The Logo of Github" /></a>
          <a href="https://wa.me/85263357003" target="_blank"><img src="./images/contacts/whatsapp.png" alt="The Logo of Whatsapp" /></a>
        </div>
      </div>
      {/* <!-- Second Panel--> */}
      <div className="contacts-item" id="contacts-2">
        <form id="contacts-form">
          <label id="nameLabel" htmlFor="nameInput">Name</label>
          <input type="text" className="form-input" id="nameInput" name="nameInput" autoComplete="off" />
          <label htmlFor="subject">Subject</label>
          <input type="text" className="form-input" id="subject" name="subject" autoComplete="off" />
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-input" name="message" rows="10" cols="50" autoComplete="off"></textarea>
          <p id="form-msg"></p>
          <input id="form-submit" type="submit" value="Send" />
        </form>
      </div>
    </section>
  )
}

export default Contact
