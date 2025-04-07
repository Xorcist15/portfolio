// src/components/ContactForm.jsx
const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label>Name</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Message</label>
        <textarea className="w-full p-2 border rounded"></textarea>
      </div>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Send Message</button>
    </form>
  );
};

export default ContactForm;
