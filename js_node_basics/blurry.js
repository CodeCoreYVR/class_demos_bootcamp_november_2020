const jimp = require('jimp');

const cutePuppy = './cute_puppy.jpg';
jimp.read(cutePuppy, (err, image) => {
  image.blur(3).write('./cute_puppy_blurred.jpg');
})