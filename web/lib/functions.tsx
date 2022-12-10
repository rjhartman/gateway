/**
 * Returns a configured Sanity client.
 *
 * @returns {sanityClient} - The configured Sanity client. *
 * */
import sanityClient from '@sanity/client'
export const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2021-10-21',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  withCredentials: true,
})

/**
 * Returns the cleaned phone number to be used in the href.
 *
 * @param {string} rawNumber - The phone number to be cleaned.
 * @returns {string} - The cleaned phone number.
 */
export function cleanPhoneNumber(rawNumber: string): string {
  return rawNumber.replace(/\D/g, '')
}
