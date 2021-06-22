const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });

    res.status(200).json(allTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const aTagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });

    (!aTagData) ? res.status(404).json({ message: 'No Tags found in that id' }) :
      res.status(200).json(aTagData);
  } catch (err) { }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTagData = await Tag.create(req.body);

    res.status(200).json(newTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updTagData = await Tag.update(req.body, {
      where: { id: req.params.id }
    });

    (!updTagData) ? res.status(404).json({ message: 'No Tags found in that id' }) :
      res.status(200).json(updTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const rmTagData = await Tag.destroy({
      where: { id: req.params.id }
    });

    (!rmTagData) ? res.status(404).json({ message: 'No Tags found in that id' }) :
      res.status(200).json(rmTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
