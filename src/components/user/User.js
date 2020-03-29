const defaultCompanyName = 'Rawlplug';
let companyCollection;

export class Company {
  constructor(name = defaultCompanyName) {
    this.name = name;
  }

  get avatarFileName() {
    // return `../../../background/company.${this.name}.jpg`;
    return '';
  }
}

export class CompanyCollection {
  constructor() {
    // eslint-disable-next-line no-unused-vars,no-underscore-dangle
    this._companies = new Map();
  }

  // eslint-disable-next-line class-methods-use-this
  set companies(value) {
    this._companies = value;
  }

  get companies() {
    // eslint-disable-next-line no-underscore-dangle
    return this._companies;
  }

  // eslint-disable-next-line no-unused-vars
  getCompany(companyName) {
    this.companies.get(companyName);
  }

  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  addCompany(companyName, company) {
    this.companies.set(companyName, company);
  }
}

// eslint-disable-next-line prefer-const
companyCollection = new CompanyCollection();
companyCollection.addCompany('Rawlplug', new Company('Rawlplug'));

export default class User {
  /**
   * TODO
   *
   * @param {string} name = ''
   * @param {string} companyName = null
   */
  constructor(name = 'me', companyName = 'Rawlplug') {
    this.name = name;
    this.company = companyCollection.getCompany(companyName);
    this._avatar = '';
  }

  /**
   * TODO
   * @return {!*}
   */
  get avatar() {
    return this._avatar;
  }

  /**
   * TODO
   *
   * @param {TODO} avatarFilename
   */
  setAvatar(avatarFilename) {
    this._avatar = require(`../../assets/${avatarFilename}`);
  }
}

const users = {
  juras: new User('Camille Patrice Jurović', ''),
  kamil: new User('Kamil Jurowicz', 'Rawlplug'),
};

users.kamil.setAvatar('user.kamil.jpg');
users.juras.setAvatar('user.juras.ricky.jpg');

console.log(users);

export {
  users,
};
