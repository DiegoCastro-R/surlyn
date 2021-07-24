
import PaymentTypes from './paymentTypes';

const Purchases = [
  {
    img: 'https://i.imgur.com/Wo2gjYX.jpeg',
    date: '23/04/2021 - 19:00',
    title: 'Pillow Pouch',
    subtotal: 7.00,
    deliverTax: 0,
    totalPrice: 7.00,
    paymentType: PaymentTypes.MONEY,
    deliverAddress: 'Retirar no local'
  },
  {
    img: 'https://i.imgur.com/WTMcoNL.jpeg',
    date: '19/12/2021 - 19:10',
    title: 'Sachês',
    subtotal: 15.00,
    deliverTax: 10,
    totalPrice: 25.00,
    paymentType: PaymentTypes.MONEY,
    deliverAddress: 'Av. Me. Benvenuta,  1000'
  }
];

export default Purchases;
