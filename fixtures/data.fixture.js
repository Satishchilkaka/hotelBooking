require('dotenv').config()

const defaultCityOptions = {
  mocked: true,
  state: 'normal',
}

const defaultHotelOptions = {
  mocked: true,
  state: 'normal',
  bfoExpiry: false,
  hcoExpiry: false,
}

class Data {
  constructor() {
    this.cityNames = [
      {
        mocked: true,
        state: 'normal',
        data: {
          region_id: 46405,
          name: 'Edmonton, Alberta, Canada',
          latitude: 53.54248,
          longitude: -113.49196,
        },
      },
    ]
    this.hotelNames = [
      {
        mocked: true,
        state: 'normal',
        bfoExpiry: false,
        hcoExpiry: false,
        data: {
          hotel_id: 'erRqEJdE',
          hotel_name: 'River Cree Resort And Casino',
          hotel_short_name: 'River Cree',
          provider: 'travolutionary',
          provider_hotel_id: 4072955,
        },
      },
    ]
  }

  getCity(userOptions = defaultCityOptions) {
    const options = { ...defaultCityOptions, ...userOptions }
    return this.filterData(this.cityNames, options)
  }

  getHotel(userOptions = defaultHotelOptions) {
    const options = { ...defaultHotelOptions, ...userOptions }
    return this.filterData(this.hotelNames, options)
  }

  filterData(array, options) {
    return array.filter(arrayItem =>
      Object.keys(options).every(key => options[key] === arrayItem[key])
    )[0].data
  }
}
export default new Data()
