const Contact = require("../models/Contact");

const searchContacts = async (req, res) => {
  try {
    const search = req.query.search || "";
    const contacts = await Contact.find({
      $or: [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    });
    return res.status(200).json(contacts).end();
  } catch (error) {
    return res.status(500).json({ error: error.message }).end();
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    return res.status(200).json(contact).end();
  } catch (error) {
    return res.status(500).json({ error: error.message }).end();
  }
};

const updateContact = async (req, res) => {
  const { firstName, lastName, email, phone, pictureUrl, _id } = req.body;
  try {
    const contact = await Contact.findOne({ id: _id });
    if (contact) {
      contact.firstName = firstName || contact.firstName;
      contact.lastName = lastName || contact.lastName;
      contact.email = email || contact.email;
      contact.phone = phone || contact.phone;
      contact.pictureUrl = pictureUrl || contact.pictureUrl;
      await contact.save();
      return res.status(200).json(contact).end();
    } else {
      return res.status(404).json({ error: "Contact not found" }).end();
    }
  } catch (error) {}
};

const deleteContact = async (req, res) => {
  const { _id } = req.body;
  try {
    const contact = await Contact.findOne({ _id });
    await contact.remove();
    return res.status(200).json({ message: "Contact deleted" }).end();
  } catch (error) {
    return res.status(500).json({ error: error.message }).end();
  }
};

const createContact = async (req, res) => {
  const { firstName, lastName, email, phone, pictureUrl } = req.body;
  try {
    const contact = new Contact();
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contact.phone = phone;
    contact.pictureUrl = pictureUrl;
    await contact.save();
    return res.status(200).json(contact).end();
  } catch (error) {
    return res.status(500).json({ error: error.message }).end();
  }
};

module.exports = {
  searchContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
};
