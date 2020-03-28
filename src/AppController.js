
export default class AppController {
  constructor() {
    this.vm = null;
    this.currentUserName = 'kamil';
    this.users = [];
  }

  setVm(vm) {
    this.vm = vm;
  }

  /**
   * TODO
   *
   * @param {TODO} user
   */
  addUser(userName, user) {
    this.users[userName] = user;
  }

  /**
   * TODO
   *
   * @param {TODO} userName
   * @return {!*}
   */
  getUser(userName) {
    return this.users[userName];
  }

  /**
   * TODO
   * @return {!*}
   */
  getCurrentUser() {
    return this.getUser(this.currentUserName);
  }
}
