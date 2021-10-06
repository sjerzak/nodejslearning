/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51JVbgIFA4p9Ui9SpquCsCf1r8vOQ5sTq3isjE4e3OHsAEHBKTaMFytUNNLld0MSVxMWgyc88NHJrIsFAPUOZUtWO00YI2QQVmf'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

export const addTourToCart = async tourId => {
  try {
    const req = await axios(`/api/v1/tours/${tourId.tourId}`);
    const tour = JSON.parse(req.request.response).data.data;

    await axios.patch(`/api/v1/users/updateMyCart`, {
      name: `${tour.name}`,
      description: `${tour.description}`,
      images: [`${tour.imageCover}`],
      amount: `${tour.price}` * 100,
      currency: 'usd',
      quantity: 1
    });
  } catch (err) {
    console.log(err);
  }
};
