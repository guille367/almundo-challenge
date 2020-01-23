const fileUploaderMiddleware = (req, res, next) => {
  const { image } = req.files
  if(image) {
    image.mv(`assets/images/${image.name}`, (err) => {
      if(!err) {
        req.body.image = req.files.image.name;
        next();
      } else {
        return res.status(500).send(err);
      }
    })
  }
  else {
    next();
  }
};

module.exports = fileUploaderMiddleware;