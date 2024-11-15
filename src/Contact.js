import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact(){
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactMethod: "",       // For radio button
    subscribe: false,        // For checkbox 1
    contactSoon: false,      // For checkbox 2
    anotherOption: false,    // For checkbox 3
    inquiryType: "",         // For dropdown
    attachment: null,        // For file upload
    hobbies: []              // For hobbies checkboxes (Sport, Food, Music)
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;  // Destructure the event target

    // Check if it is a checkbox group (like hobbies) or a normal checkbox
    if (type === "checkbox") {
      if (name === "hobbies") {
        // Update hobbies array
        setFormData((prevFormData) => {
          const hobbies = checked
            ? [...prevFormData.hobbies, value]
            : prevFormData.hobbies.filter((hobby) => hobby !== value);

          return {
            ...prevFormData,
            hobbies,
          };
        });
      } else {
        // For other checkboxes and form fields
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: checked,  // For checkboxes (like subscribe, contactSoon, etc.)
        }));
      }
    } else {
      // For text inputs, radios, select fields, etc.
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,  // Update the value for inputs and select fields
      }));
    }
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      attachment: e.target.files[0],
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data string for the alert
    let alertMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
      Preferred Contact Method: ${formData.contactMethod}
      Subscribed to Newsletter: ${formData.subscribe ? "Yes" : "No"}
      Contact me soon: ${formData.contactSoon ? "Yes" : "No"}
      Another Option: ${formData.anotherOption ? "Yes" : "No"}
      Inquiry Type: ${formData.inquiryType}
      Hobbies: ${formData.hobbies.length > 0 ? formData.hobbies.join(", ") : "None"}
      ${formData.attachment ? `Attachment: ${formData.attachment.name}` : ""}
    `;

    // Show the form data in a browser alert dialog
    window.alert(alertMessage);
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        {/* Text Input for Name */}
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Text Input for Email */}
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Textarea for Message */}
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Radio Buttons for Preferred Contact Method */}
        <Form.Group>
          <Form.Label>Preferred Contact Method:</Form.Label>
          <Form.Check
            type="radio"
            label="Email"
            name="contactMethod"
            value="email"
            checked={formData.contactMethod === "email"}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Phone"
            name="contactMethod"
            value="phone"
            checked={formData.contactMethod === "phone"}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Checkbox 1: Subscribe to Newsletter */}
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Subscribe to our newsletter"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Checkbox 2: Contact me soon */}
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Contact me soon"
            name="contactSoon"
            checked={formData.contactSoon}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Checkbox 3: Another option */}
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Another option"
            name="anotherOption"
            checked={formData.anotherOption}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Hobbies Checkboxes */}
        <Form.Group>
          <Form.Label>Hobbies:</Form.Label>
          <Form.Check
            type="checkbox"
            label="Sport"
            name="hobbies"
            value="Sport"
            checked={formData.hobbies.includes("Sport")}
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            label="Food"
            name="hobbies"
            value="Food"
            checked={formData.hobbies.includes("Food")}
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            label="Music"
            name="hobbies"
            value="Music"
            checked={formData.hobbies.includes("Music")}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Dropdown for Inquiry Type */}
        <Form.Group>
          <Form.Label>Type of Inquiry:</Form.Label>
          <Form.Control
            as="select"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </Form.Control>
        </Form.Group>

        {/* File Upload for Attachment */}
        <Form.Group>
          <Form.Label>Attachment:</Form.Label>
          <Form.Control
            type="file"
            name="attachment"
            onChange={handleFileChange}
          />
          {formData.attachment && <p>Selected file: {formData.attachment.name}</p>}
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" variant="primary">Send</Button>
      </Form>
    </Container>
  );
}

export default Contact;
