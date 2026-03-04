import sharp from 'sharp';

async function resizeImage() {
  try {
    await sharp('src/components/profile.png')
      .resize(256, 256)
      .toFile('src/components/profile_small.png');
    console.log('Image resized successfully');
  } catch (error) {
    console.error('Error resizing image:', error);
  }
}

resizeImage();
