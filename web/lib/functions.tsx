/**
 * Returns the cleaned phone number to be used in the href.
 *
 * @param {string} rawNumber - The phone number to be cleaned.
 * @returns {string} - The cleaned phone number.
 */
export function cleanPhoneNumber(rawNumber: string): string {
  return rawNumber.replace(/\D/g, '')
}

import sanityClient from 'lib/sanity-client'
import type {
  Page as PageType,
  Navigation as NavigationType,
  NavigationItem as NavItemType,
} from 'lib/schema'
/**
 * Returns an array of menu items.
 *
 * @param {NavigationType} rawMenu - The menu data returned from Sanity.
 */
export async function buildMenu(rawMenu: NavigationType) {
  const getItems = async (items: NavItemType[] | undefined): Promise<any> => {
    return await Promise.all(
      items?.map(async ({ link, children }) => {
        const url = async () => {
          if (!link || link.type === 'placeholder') return null

          if (link.type === 'external' && link.externalUrl)
            return link.externalUrl

          if (link.type === 'internal' && link.internalLink) {
            const { slug } = (await sanityClient.expand(
              link.internalLink
            )) as PageType
            return `/${slug.current}`
          }
        }

        return {
          url: await url(),
          type: link?.type,
          title: link?.text,
          children: children ? await getItems(children) : null,
        }
      }) || []
    )
  }

  return await getItems(rawMenu.items)
}
