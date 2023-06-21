const getIndex = (req, res) => {
    res.json({ message: 'GET request successful' });
};
  
const createIndex = (req, res) => {
    res.json({ message: 'POST request successful' });
};
  
const updateIndex = (req, res) => {
    res.json({ message: 'PUT request successful' });
};
  
const deleteIndex = (req, res) => {
    res.json({ message: 'DELETE request successful' });
};
  
module.exports = {
  getIndex,
  createIndex,
  updateIndex,
  deleteIndex
};


