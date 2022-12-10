import { createClient } from 'next-sanity'
import { SanityClient } from '@sanity/client'
import { useNextSanityImage } from 'next-sanity-image'
import { UseNextSanityImageProps } from 'next-sanity-image/dist/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * Returns the cleaned phone number to be used in the href.
 *
 * @param {string} rawNumber - The phone number to be cleaned.
 * @returns {string} - The cleaned phone number.
 */
export function cleanPhoneNumber(rawNumber: string): string {
  return rawNumber.replace(/\D/g, '')
}

/**
 * Returns the client used to fetch data from Sanity.
 *
 * @returns {SanityClient} - The client used to fetch data from Sanity.
 */
export const client: SanityClient = createClient({
  projectId: '3zzetd36',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
})

export const imageProps = (image: SanityImageSource | null) =>
  useNextSanityImage(client, image) as UseNextSanityImageProps
