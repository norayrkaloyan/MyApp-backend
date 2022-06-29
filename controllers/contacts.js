import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { user_id, name, address, zip, tel, email,about } = req.body;
    //neu Contact in die DB schreiben
    const newContact = await Contact.create({
      user_id,
      name,
      address,
      zip,
      tel,
      email,
      about,
    });

    if (newContact) {
      res.status(201).send("Contact successfully created");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findOneAndDelete({_id: contactId})
    const userId = result.user_id;
    const allContacts = await Contact.find({user_id: userId})
      res.status(200).json(allContacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getContactsByUserId = async (req, res) => {
  try {
    //die userId aus den params abholen
    //mongodb abfragen mit find in der contacts collection wo userId = userId
    const { userId } = req.params;
    const result = await Contact.find({user_id: userId})
    //den Fall behandeln, dass User noch keine Kontakte hat
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
