var router = require('express').Router();
var cateGoryRouTes = require('./category-routes');
var proDuctRouTes = require('./proDuct-RouTes');
var tagRouTes = require('./tag-RouTes');

router.use('/cateGory', cateGoryRouTes);
router.use('/proDucts', proDuctRouTes);
router.use('/tags', tagRouTes);

module.exports = router;













// const router = require('express').Router();

// const userRoutes = require('./user-routes');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

// router.use('/comments', commentRoutes);
// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);

// module.exports = router;  




