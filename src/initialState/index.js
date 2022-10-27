import imageId1 from '../assets/Tshirt-Argentina.jpg'
import imageId2 from '../assets/Mug-Jest.jpg'
import imageId3 from '../assets/Pin.jpg'
import imageId4 from '../assets/Sticker-Jest.png'
import imageId5 from '../assets/Sticker-Jest2.jpg'
import imageId6 from '../assets/Tshirt-Brasil.jpg'

export const initialState = {
    cart: [],
    products: [
      {
        'id': '1',
        // 'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
        'image': imageId1,
        'title': 'Camiseta',
        'price': 25,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        'id': '3',
        //'image': 'https://arepa.s3.amazonaws.com/mug.png',
        'image': imageId2,
        'title': 'Mug',
        'price': 10,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        'id': '4',
        //'image': 'https://arepa.s3.amazonaws.com/pin.png',
        'image': imageId3,
        'title': 'Pin',
        'price': 4,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        'id': '5',
        //'image': 'https://arepa.s3.amazonaws.com/stickers1.png',
        'image': imageId4,
        'title': 'Stickers',
        'price': 2,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        'id': '6',
        //'image': 'https://arepa.s3.amazonaws.com/stickers2.png',
        'image': imageId5,
        'title': 'Stickers',
        'price': 2,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        'id': '7',
        //'image': 'https://arepa.s3.amazonaws.com/hoodie.png',
        'image': imageId6,
        'title': 'Hoodie',
        'price': 35,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ],
  };