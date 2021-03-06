import CellData from './CellData.js';

export default class GridCellData extends CellData {
  /**
   * @access public
   * @param {boolean} value - true if the element should be read only, false for read and editable
   */
  set readOnly(value) {
    this._reactProps['aria-readonly'] = value;
  }

  /**
   * @access public
   * @returns {boolean} true if the element should be read only, false for read and editable
   */
  get readOnly() {
    return this._reactProps['aria-readonly'];
  }

  /**
   * @access public
   * @param {boolean} value - true if the element is required, false otherwise
   */
  set required(value) {
    this._reactProps['aria-required'] = value;
  }

  /**
   * @access public
   * @returns {boolean} true if the element is required, false otherwise
   */
  get required() {
    return this._reactProps['aria-required'];
  }

  /**
   * @access public
   * @param {boolean} value - true if the element is selected, false otherwise
   */
  set selected(value) {
    this._reactProps['aria-selected'] = value;
  }

  /**
   * @access public
   * @returns {boolean} true if the element is selected, false otherwise
   */
  get selected() {
    return this._reactProps['aria-selected'];
  }
}
