import _ from 'lodash';
import KeyCodes from 'keycodes-enum';
import AccessibilityObject from './AccessibilityObject.js';

export default class TabData extends AccessibilityObject {
  constructor(displayObject, role, domIdPrefix) {
    super(displayObject, role, domIdPrefix);
    _.bindAll(this, '_onTabKeyDown');
    this._reactProps.onKeyDown = this._onTabKeyDown;
  }

  /**
   * Sets the size of the tab in list
   * @access public
   * @param {number} value - Total number of tab buttons in the list
   */
  set size(value) {
    this._reactProps['aria-setsize'] = value;
  }

  /**
   * Retrieves the size of the tab list
   * @access public
   */
  get size() {
    return this._reactProps['aria-setsize'];
  }

  /**
   * Sets the position of the tab button in the list
   * @access public
   * @param {number} value - position of the tab button in the list
   */
  set position(value) {
    this._reactProps['aria-posinset'] = value;
  }

  /**
   * Retrieves the position of the tab button from the list
   * @access public
   */
  get position() {
    return this._reactProps['aria-posinset'];
  }

  /**
   * @access public
   * @param {string} value - Refers to the tabpanel element associated with the current tab.
   */
  set controls(value) {
    this._reactProps['aria-controls'] = value;
  }

  /**
   * @access public
   * @returns {string} Refers to the tabpanel element associated with the current tab.
   */
  get controls() {
    return this._reactProps['aria-controls'];
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

  /**
   * Keydown listener for when the radio button is pressed
   * @access private
   */
  _onTabKeyDown(e) {
    if ([KeyCodes.enter, KeyCodes.space].indexOf(e.keyCode) !== -1) {
      const event = new createjs.Event('keyboardClick', false, e.cancelable);
      this._displayObject.dispatchEvent(event);
    }
  }
}
