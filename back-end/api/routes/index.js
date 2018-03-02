var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/reemController');
  hproductCtrl = require('../controllers/ProductController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/reem/getProducts', productCtrl.getProducts);
router.get('/reem/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/reem/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/reem/createProduct', productCtrl.createProduct);
router.patch('/reem/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/reem/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
