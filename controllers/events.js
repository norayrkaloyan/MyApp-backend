import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const { datum,user_id, name,title, address, zip, tel, email,about } = req.body;
    //neu Contact in die DB schreiben
    const newEvent = await Event.create({
      user_id,
      title,
      name,
      address,
      zip,
      tel,
      email,
      about,
      datum,
    });

    if (newEvent) {
      res.status(201).send("Event successfully created");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const result = await Event.findOneAndDelete({_id: eventId})
    const userId = result.user_id;
    const allEvents = await Event.find({user_id: userId})
      res.status(200).json(allEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEventsByUserId = async (req, res) => {
  try {
    //die userId aus den params abholen
    //mongodb abfragen mit find in der contacts collection wo userId = userId
    const { userId } = req.params;
    const result = await Event.find({user_id: userId})
    //den Fall behandeln, dass User noch keine Kontakte hat
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
