import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, address, zip, tel, email } = req.body;
    //neu Contact in die DB schreiben
    const newContact = await Contact.create({
      name,
      address,
      zip,
      tel,
      email,
    });

    if (newContact) {
      res
        .status(201)
        .send("Contact successfully created");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getContacts=(req,res)=>{ 
 
  Contact.find() 
  .then(result=>{ 
  console.log('result: ',result) 
  res.send(result.length>0?result:'No Contact'); 
  }) 
  .catch(err=>{ 
  console.log(err); 
  }) 
 } 

