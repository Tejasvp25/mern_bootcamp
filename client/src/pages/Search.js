import React from "react";
import ContactCard from "../components/contactcard/ContactCard";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="24"
    height="24"
    viewBox="0 0 172 172"
    style={{ fill: "#000000" }}
  >
    <g
      fill="none"
      fill-rule="nonzero"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
      style={{ mixBlendMode: "normal" }}
    >
      <path d="M0,172v-172h172v172z" fill="none"></path>
      <g fill="#ecf0f1">
        <path d="M86,21.5c-15.74728,0 -28.66667,12.91939 -28.66667,28.66667c0,15.74728 12.91939,28.66667 28.66667,28.66667c15.74727,0 28.66667,-12.91939 28.66667,-28.66667c0,-15.74728 -12.91939,-28.66667 -28.66667,-28.66667zM86,35.83333c8.00097,0 14.33333,6.33237 14.33333,14.33333c0,8.00097 -6.33237,14.33333 -14.33333,14.33333c-8.00097,0 -14.33333,-6.33237 -14.33333,-14.33333c0,-8.00097 6.33237,-14.33333 14.33333,-14.33333zM129,93.16667c-20.06667,0 -35.83333,15.76667 -35.83333,35.83333c0,20.06667 15.76667,35.83333 35.83333,35.83333c7.16667,0 14.33893,-2.1556 20.07226,-5.73893l12.8916,12.9056l10.03614,-10.03614l-12.9056,-12.8916c3.58333,-5.73333 5.73893,-12.9056 5.73893,-20.07226c0,-20.06667 -15.76667,-35.83333 -35.83333,-35.83333zM86,100.33333c-22.5105,0 -64.5,11.07967 -64.5,32.25v17.91667h62.23242c-2.12133,-4.45767 -3.60136,-9.2665 -4.3252,-14.33333h-43.57389v-3.58333c0,-5.7835 22.89828,-16.25836 45.05761,-17.7347c1.53367,-5.23167 3.89688,-10.08764 6.94271,-14.45932c-0.60917,-0.01433 -1.25316,-0.05599 -1.83366,-0.05599zM129,107.5c12.18333,0 21.5,9.31667 21.5,21.5c0,12.18333 -9.31667,21.5 -21.5,21.5c-12.18333,0 -21.5,-9.31667 -21.5,-21.5c0,-12.18333 9.31667,-21.5 21.5,-21.5z"></path>
      </g>
    </g>
  </svg>
);

const AddIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="24"
    height="24"
    viewBox="0 0 172 172"
    style={{ fill: "#000000" }}
  >
    <g
      fill="none"
      fill-rule="none"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
      style={{ mixBlendMode: "normal" }}
    >
      <path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero"></path>
      <g fill="#ffffff" fill-rule="evenodd">
        <path d="M78.83333,14.33333v64.5h-64.5v14.33333h64.5v64.5h14.33333v-64.5h64.5v-14.33333h-64.5v-64.5z"></path>
      </g>
    </g>
  </svg>
);

const Search = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/contact");
      if (res.ok) {
        const json = await res.json();
        json && setContacts(json);
      }
      setLoading(false);
    })();
  }, []);
  const onDelete = async (id) => {
    await fetch(`/api/contact`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id }),
    });
    setContacts(contacts.filter((contact) => contact._id !== id));
  };
  return (
    <div className="container">
      <center>
        <h1 className="mt-4">MERN Phone Directory</h1>
        <br />
        <div className="container justify-content-center">
          <form>
            <input class="form-control wd-medium" />
            <br />
            <button className="btn btn-primary btn-sm m-2">
              <SearchIcon />
              &nbsp; Search
            </button>
            <button
              className="btn btn-primary btn-sm m-2"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <AddIcon />
              &nbsp; Add
            </button>
          </form>
        </div>
      </center>
      <div className="container">
        {!loading &&
          (contacts.length > 0 ? (
            contacts.map((contact) => (
              <ContactCard contact={contact} Key={uuid()} onDelete={onDelete} />
            ))
          ) : (
            <h1 className="text-center mt-5">No Contacts Found</h1>
          ))}
      </div>
    </div>
  );
};

export default Search;
