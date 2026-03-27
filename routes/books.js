/**
 * Route: /books/:id
 * Method: GET
 * Description: Get a book by its ID
 * Access: Public
 */

router.get('/:id', (req, res) => {
  const { id } = req.params;

  // Convert id to number if your book IDs are numbers
  const book = books.find((each) => each.id === Number(id));

  // If book not found
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book Not Found for id: ${id}`
    });
  }

  // If book found
  res.status(200).json({
    success: true,
    data: book
  });
});