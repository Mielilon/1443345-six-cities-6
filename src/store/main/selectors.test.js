import {selectorsOffer as offers} from '../../tests-mock';
import {getOffers} from './selectors';

describe(`Main reselector work correctly`, () => {
  const location = `Paris`;

  it(`Selector 'getOffers' should return correctly offers list with any type`, () => {
    const type = `Popular`;

    const resultSelector = getOffers.resultFunc(location, offers.start, type);

    expect(resultSelector).toEqual(offers.any);
  });

  it(`Selector 'getOffers' should return correctly offers list with 'Price: high to low' type`, () => {
    const type = `Price: high to low`;

    const resultSelector = getOffers.resultFunc(location, offers.start, type);

    expect(resultSelector).toEqual(offers.byPrice);
  });

  it(`Selector 'getOffers' should return correctly offers list with 'Price: low to high' type`, () => {
    const type = `Price: low to high`;

    const resultSelector = getOffers.resultFunc(location, offers.start, type);

    expect(resultSelector).toEqual([...offers.byPrice].reverse());
  });

  it(`Selector 'getOffers' should return correctly offers list with 'Top rated first' type`, () => {
    const type = `Top rated first`;

    const resultSelector = getOffers.resultFunc(location, offers.start, type);

    expect(resultSelector).toEqual(offers.byRating);
  });
});
