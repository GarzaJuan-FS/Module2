const getAllAuthors = (req, res) => {
  res.status(200).json({
    message: `${req.method} - Request to Author endpoint`,
    success: true,
  });
};

const getAuthorById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    message: `${req.method} - Request to Author endpoint`,
    success: true,
  });
};

const createAuthor = (req, res) => {
  res.status(200).json({
    message: `${req.method} - Request to Author endpoint`,
    success: true,
  });
};

const updateAuthor = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    message: `${req.method} - Request to Author endpoint`,
    success: true,
  });
};

const deleteAuthor = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    message: `${req.method} - Request to Author endpoint`,
    success: true,
  });
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
