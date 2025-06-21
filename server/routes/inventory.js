const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middleware/auth');
const Inventory = require('../models/Inventory');

// Get all inventory items
router.get('/', auth, async (req, res) => {
  try {
    const items = await Inventory.find().sort({ addedOn: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new inventory item (admin only)
router.post('/', [auth, isAdmin], async (req, res) => {
  try {
    const { itemName, quantity, unit, location } = req.body;
    const newItem = new Inventory({
      itemName,
      quantity,
      unit,
      location
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete inventory item (admin only)
router.delete('/:id', [auth, isAdmin], async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await item.remove();
    res.json({ message: 'Item removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;