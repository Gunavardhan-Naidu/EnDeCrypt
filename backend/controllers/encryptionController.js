const crypto = require('crypto');

exports.sha256Encrypt = (req, res) => {
  const { text } = req.body;
  const hash = crypto.createHash('sha256').update(text).digest('hex');
  res.status(200).json({ encryptedText: hash });
};
