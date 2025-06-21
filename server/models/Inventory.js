const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true,
    min: 0
  },
  unit: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  addedOn: { 
    type: Date, 
    default: Date.now 
  },
  lastUpdated: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Inventory', inventorySchema);