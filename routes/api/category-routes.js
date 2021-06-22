const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategoryData = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const aCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    (!aCategoryData) ?
      res.status(404).json({ message: 'No categories found with that id.' }) :
      res.status(200).json(aCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategoryData = await newCategoryData.create(req.body);

    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updCategoryData = await Category.update(req.body, {
      where: { id: req.params.id }
    });

    (!updCategoryData) ? res.status(404).json({ message: 'No category found with that id.' }) :
      res.status(200).json(updCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const rmCategoryData = await Category.destroy({
      where: { id: req.params.id }
    });

    (!rmCategoryData) ? res.status(404).json({ message: 'No category found with that id.' }) :
      res.status(200).json(rmCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
