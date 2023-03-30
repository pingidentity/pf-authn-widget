
export default class Assets {

  constructor(options) {
    this.logo = (options && options.logo) || 'https://assets.pingone.com/ux/end-user/2.4.22/images/ping-logo.svg';
  }

  toTemplateParams() {
    var result = {
      logo: this.logo,
    }
    return result
  }
}
