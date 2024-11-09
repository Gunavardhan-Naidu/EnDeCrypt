const express = require('express');
const router = express.Router();
const encryptionController = require('../controllers/encryptionController');

router.post('/caesar', encryptionController.caesarEncrypt);
router.post('/sha256', encryptionController.sha256Encrypt);
router.post('/base64', encryptionController.base64Encode);
router.post('/md5', encryptionController.md5Encrypt);
// Add more as needed

module.exports = router;
