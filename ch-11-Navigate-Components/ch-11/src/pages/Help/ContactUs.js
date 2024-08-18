import React from "react";
import { Form, formData, redirect, useActionData } from "react-router-dom";
function ContactUs() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contactus">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
      {data && data.error && <p>meassage must be over 10 chars long</p>}
    </div>
  );
}

const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);

  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long" };
  }

  // redirect the user...
  return redirect("/");
};
export default ContactUs;
export { contactAction };
