const express = require('express');
const router = express.Router();
const Event = require('../models/Events');
const { v4: uuidv4 } = require('uuid');

// Route: POST /events
// Description: Save a event in the database
router.post('/addEvent', async (req, res) => {
  const { name, email, title, description} = req.body;
     const  id= uuidv4()
  try {
    const newEvent = new Event({
      id,
      name,
      email,
      title,
      description
    });

    await newEvent.save();
    res.json(newEvent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});


// Description: Get a event by ID
router.post('/getEvent', async (req, res) => {
    const { id } = req.body;
  
    try {
      const event = await Event.findOne({id});
  
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }

      res.json(event);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  

// Route: GET /events
// Description: Get all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();

    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Route: DELETE /events/:id
// Description: Delete a event by ID
router.delete('/removeEvent', async (req, res) => {
  const { id } = req.body;

  try {
    const deletedEvent = await Event.findOneAndDelete({id});

    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
