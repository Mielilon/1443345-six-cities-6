export const dataToAuthInfo = (data) => {
  const authInfo = {
    ...data,
    avatarUrl: data[`avatar_url`],
    isPro: data[`is_pro`]
  };

  delete authInfo[`avatar_url`];
  delete authInfo[`is_pro`];

  return authInfo;
};

export const dataToHotelOffer = (data) => {
  const offer = {
    ...data,
    host: {
      ...data.host,
      avatarUrl: data.host[`avatar_url`],
      isPro: data.host[`is_pro`]
    },
    isFavorite: data[`is_favorite`],
    isPremium: data[`is_premium`],
    previewImage: data[`preview_image`],
    maxAdults: data[`max_adults`]
  };

  delete offer.host[`avatar_url`];
  delete offer.host[`is_pro`];
  delete offer[`is_favorite`];
  delete offer[`is_premium`];
  delete offer[`preview_image`];
  delete offer[`max_adults`];

  return offer;
};

export const dataToComment = (data) => {
  const comment = {
    ...data,
    user: {
      ...data.user,
      avatarUrl: data.user[`avatar_url`],
      isPro: data.user[`is_pro`]
    }
  };

  delete comment.user[`avatar_url`];
  delete comment.user[`is_pro`];

  return comment;
};
