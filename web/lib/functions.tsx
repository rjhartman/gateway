/**
 * Returns the cleaned phone number to be used in the href.
 *
 * @param {string} rawNumber - The phone number to be cleaned.
 * @returns {string} - The cleaned phone number.
 */
export function cleanPhoneNumber(rawNumber: string): string {
  return rawNumber.replace(/\D/g, '')
}
