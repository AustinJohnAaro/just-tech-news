var router = require('express').Router();
var { proDuct, cateGory, tag, proDuctTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    var data = await proDuct.findAll({
      include: [{ model: cateGory }, { model: Tag}],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    var data = await proDuct.findByPk(req.params.id, {
      include: [{ model: Category }, { model: tag}],
    });
    if (!data) {
      res.status(404).json({ message: "No products found using that id."});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  proDuct.create(req.body)
    .then((proDuct) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const proDuctTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            proDuct_id: proDuct.id,
          };
        });
        return proDuctTag.bulkCreate(proDuctTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(proDuct);
    })
    .then((proDuctTagIds) => res.status(200).json(proDuctTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  proDuct.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((proDuct) => {
      // find all associated tags from ProductTag
      return proDuctTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((proDuctTag) => {
      // get list of current tag_ids
      const proDuctTagIds = proDuctTag.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newproDuctTag = req.body.tagIds
        .filter((tag_id) => !proDuctTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      var proDuctTagToRemove = proDuctTag
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        proDuctTag.destroy({ where: { id: proDuctTagToRemove } }),
        proDuctTag.bulkCreate(newproDuctTag),
      ]);
    })
    .then((updatedproDuctTags) => res.json(updatedproDuctTags))
    .catch((err) => {
      // console.log(err);
      res.status(200).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const data = await proDuct.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!data) {
      res.status(400).json({message: "Product id was not found, nothing has been deleted."})
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router; 





















 
