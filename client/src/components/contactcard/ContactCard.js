import { useNavigate } from "react-router-dom";
import "./ContactCard.css";

const EditIcon = () => (
  <img
    alt="svgImg"
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEzMS45Njc0NCwxNC4zMzMzM2MtMS44MzQ2NywwIC0zLjY2OTU2LDAuNzAyMTEgLTUuMDY3MDYsMi4wOTk2MWwtMTQuMzMzMzMsMTQuMzMzMzNsLTEwLjEzNDExLDEwLjEzNDExbC04MC45MzI5NCw4MC45MzI5NHYyOC42NjY2N2gyOC42NjY2N2wxMDUuNDAwMzksLTEwNS40MDAzOWMyLjgwMjE3LC0yLjgwMjE3IDIuODAyMTcsLTcuMzM5MTEgMCwtMTAuMTM0MTJsLTE4LjUzMjU1LC0xOC41MzI1NWMtMS4zOTc1LC0xLjM5NzUgLTMuMjMyMzksLTIuMDk5NjEgLTUuMDY3MDYsLTIuMDk5NjF6TTEzMS45Njc0NCwzMS42MzQxMWw4LjM5ODQ0LDguMzk4NDRsLTkuMjY2MjgsOS4yNjYyOGwtOC4zOTg0NCwtOC4zOTg0NHpNMTEyLjU2NzA2LDUxLjAzNDUxbDguMzk4NDQsOC4zOTg0NGwtNzYuNzMzNzIsNzYuNzMzNzJoLTguMzk4NDR2LTguMzk4NDR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
  />
);

const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card container p-3 m-3">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6">
          <img
            src={contact.pictureUrl}
            alt={`${contact.firstName} ${contact.lastName}`}
            className="contact-img"
          ></img>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <span className="contact-details">
            <p>First Name</p>
            <p>{contact.firstName}</p>
          </span>
          <span className="contact-details">
            <p>Last Name</p>
            <p>{contact.lastName}</p>
          </span>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <span className="contact-details">
            <p>Phone</p>
            <p>{contact.phone}</p>
          </span>
          <span className="contact-details">
            <p>Email</p>
            <p>{contact.email}</p>
          </span>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <button
            className="btn btn-primary btn-sm m-2"
            onClick={() => navigate(`/contact/${contact._id}`)}
          >
            <EditIcon /> &nbsp; Edit
          </button>
          <button
            className="btn btn-primary btn-sm m-2"
            onClick={() => onDelete(contact._id)}
          >
            <EditIcon /> &nbsp; Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
