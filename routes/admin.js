// node core modules
const path  = require('path');

// 3rd Party Modules
const express = require('express');
const { check, body } = require('express-validator/check');


// Custom imports
const adminCtrl = require('../controllers/admin');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/products', isAuth, adminCtrl.getProducts);

// implicitly this route is reached under /admin/add-product => GET
router.get('/add-product', isAuth, adminCtrl.getAddProduct);

// implicitly this route is reached under /admin/add-product => POST
router.post('/add-product', isAuth, 
[
  check('title')
  .isString()
  .isLength({min: 3})
  .trim(),

  check('price')
  .isFloat(),

  check('description')
  .isLength({min: 5, max: 300})
  .trim()
]
,adminCtrl.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminCtrl.getEditProduct);

router.post('/edit-product', isAuth, 
  [
    check('title')
    .isString()
    .isLength({min: 3})
    .trim(),
    
    check('price')
    .isFloat(),

    check('description')
    .isLength({min: 5, max: 300})
    .trim()
  ], 
adminCtrl.postEditProduct);

router.delete('/product/:productId', isAuth, adminCtrl.deleteProduct);

module.exports = router;
