const { Router } = require("express");
const {
  searchContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
} = require("../controllers/Contact.controller");

const router = Router();

router.get("/contact", searchContacts);
router.get("/contact/:id", getContact);
router.post("/contact", createContact);
router.patch("/contact", updateContact);
router.delete("/contact", deleteContact);

module.exports = router;
