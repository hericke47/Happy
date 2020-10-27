import Image from '../models/Image';

export default {
  // vai retoranar da maneira que quero para o fronend
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.16.103:3333/uploads/${image.path}`,
    }
  },

  renderMany(image: Image[]) {
    return image.map(image => this.render(image));
  }
}
