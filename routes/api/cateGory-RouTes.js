var router = require("express").Router();
var { cateGory, proDuct } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    var data = await cateGory.findAll({
      include: [{ model: proDuct }],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    var data = await cateGory.findByPk(req.params.id, {
      include: [{ model: proDuct }],
    });
    if (!data) {
      res
        .status(404)
        .json({ message: "There's no cateGory under the given id." });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    var data = await cateGory.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    var data = await cateGory.update(
      {
        cateGory_name: req.body.cateGory_name,
      },
      {
        returning: true,
        where: {
          id: req.params.id,
        },
      }
    );
    if (!data) {
      res.status(404).json({ message: "cateGory id is not found, no action was taken."});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    var data = await cateGory.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!data) {
      res.status(404).json({ message: "Category id not found. Nothing was deleted."});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; 












  

