import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactForm = (props) => {
  const [currentContact, setCurrentContact] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [updatedContact, setUpdatedContact] = useState({});

  const handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    setCurrentContact({ ...currentContact, [name]: value });
    setUpdatedContact({ ...updatedContact, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      delete currentContact.__v;
      const res = await fetch("/api/contacts/", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json;",
        },
        body: JSON.stringify({ _id: currentContact._id, ...updatedContact }),
      });
    } else {
      const res = await fetch("/api/contacts/", {
        method: "POST",
        headers: {
          "Content-type": "application/json;",
        },
        body: JSON.stringify({ ...currentContact, _id: null }),
      });
      if (res.ok) {
        navigate(-1);
      }
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await fetch(`/api/contact/${id}`);
        if (res.ok) {
          const json = await res.json();
          setCurrentContact(json);
        }
      })();
    }
  }, []);

  return (
    <div className="container justify-content-center">
      <h1 className="my-4 text-center">Contact Form</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div class="m-3">
            <label class="form-label">First Name</label>
            <input
              class="form-control wd-large"
              value={currentContact.firstName}
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div class="m-3">
            <label class="form-label">Last Name</label>
            <input
              class="form-control wd-large"
              value={currentContact.lastName}
              onChange={handleChange}
              name="lastName"
            />
          </div>
          <div class="m-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control wd-large"
              value={currentContact.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div class="m-3">
            <label class="form-label">Phone No</label>
            <input
              type="tel"
              class="form-control wd-large"
              value={currentContact.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div class="m-3">
            <label class="form-label">Picture URL</label>
            <input
              type="url"
              class="form-control wd-large"
              value={currentContact.pictureUrl}
              onChange={handleChange}
              name="pictureUrl"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mx-3">
          Submit
        </button>
        <button class="btn btn-primary mx-3" onClick={() => navigate(-1)}>
          Go back
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
