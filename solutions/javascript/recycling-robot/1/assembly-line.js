// @ts-check
// The line above enables type checking in supporting editors/IDEs.

import { ElectronicDevice } from './lib.js';

/**
 * Check if a value is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Check if a value is a finite number or a bigint.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNumber(value) {
  if (typeof value === 'number') {
    return Number.isFinite(value); // true for finite numbers
  }
  return typeof value === 'bigint'; // true for bigint
}

/**
 * Check if a value is an object (but not null).
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isObject(value) {
  return value !== null && typeof value === 'object';
}

/**
 * Check if a string contains only digits (with optional minus sign).
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNumericString(value) {
  return typeof value === 'string' && /^-?\d+$/.test(value);
}

/**
 * Check if an object is an instance of `ElectronicDevice` or its subclasses.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isElectronic(value) {
  return value instanceof ElectronicDevice;
}

/**
 * Check if a value is a non-empty array.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Check if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

/**
 * Check if an object has a "type" property (own or inherited).
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function hasType(value) {
  return isObject(value) && 'type' in value;
}

/**
 * Ensure an object has an "id" property. Throws an error if missing.
 *
 * @param {unknown} value
 * @throws {Error}
 */
export function assertHasId(value) {
  if (!isObject(value) || !('id' in value)) {
    throw new Error("Object is missing the 'id' property");
  }
}

/**
 * Check if an object has its own "id" property (not inherited).
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function hasIdProperty(value) {
  return isObject(value) && Object.hasOwn(value, 'id');
}

/**
 * Check if an object has its own "type" property and it's not undefined.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function hasDefinedType(value) {
  return isObject(value) && Object.hasOwn(value, 'type') && value.type !== undefined;
}
