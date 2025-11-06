// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number|Date|string|undefined} [now] (ms since the epoch, Date object, ISO string, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  // Use the provided `now` if it was passed, otherwise use the current date/time.
  const base = now === undefined ? new Date() : new Date(now);
  if (isNaN(base.getTime())) {
    throw new Error('Invalid "now" parameter');
  }

  const appointment = new Date(base.getTime());
  appointment.setDate(appointment.getDate() + Number(days));
  return appointment;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  const d = appointmentDate instanceof Date ? appointmentDate : new Date(appointmentDate);
  if (isNaN(d.getTime())) {
    throw new Error('Invalid Date');
  }
  return d.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp');
  }

  return {
    year: date.getFullYear(),
    month: date.getMonth(), // 0-indexed (January = 0)
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp');
  }

  const opts = options || {};
  const { year, month, date: day, hour, minute } = opts;

  if (typeof year === 'number') date.setFullYear(year);
  if (typeof month === 'number') date.setMonth(month);
  if (typeof day === 'number') date.setDate(day);
  if (typeof hour === 'number') {
    // preserve current minutes/seconds/ms unless minute is explicitly provided below
    const curMinutes = date.getMinutes();
    const curSeconds = date.getSeconds();
    const curMs = date.getMilliseconds();
    date.setHours(hour, curMinutes, curSeconds, curMs);
  }
  if (typeof minute === 'number') date.setMinutes(minute);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const d1 = new Date(timestampA);
  const d2 = new Date(timestampB);
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    throw new Error('Invalid timestamp(s)');
  }

  const diffMs = Math.abs(d2.getTime() - d1.getTime());
  const diffSec = diffMs / 1000;
  return Math.round(diffSec);
}

/**
 * Check whether an appointment is in the future relative to current time
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 *
 * @returns {boolean}
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const app = new Date(appointmentTimestamp);
  const now = new Date(currentTimestamp);
  if (isNaN(app.getTime()) || isNaN(now.getTime())) {
    throw new Error('Invalid timestamp(s)');
  }
  return app.getTime() > now.getTime();
}
