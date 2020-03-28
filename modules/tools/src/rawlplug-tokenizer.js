/**
 * @name RawlplugTokenizer
 * @package "tools"
 */

export default class RawlplugTokenizer {
  /**
   * Constructor
   *
   * @param {string} srcTokensPath - source path
   * @param {string} destTokensPath - destination path
   */
  constructor(srcTokensPath, destTokensPath) {
    this.srcTokensPath = srcTokensPath;
    this.destTokenPath = destTokensPath;
  }
}
