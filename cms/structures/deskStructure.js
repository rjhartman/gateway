import ReactDOMServer from 'react-dom/server'
import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import { SeoToolsPane } from 'sanity-plugin-seo-tools'
import { PortableText } from '@portabletext/react'
import { GoSettings } from 'react-icons/go'
import { RiImageFill } from 'react-icons/ri'
import { HiInformationCircle } from 'react-icons/hi'

export const getDefaultDocumentNode = ({ schemaType }) => {
  return S.document().views([
    S.view.form(),
    schemaType === 'page' &&
      S.view
        .component(SeoToolsPane)
        .options({
          fetch: false,
          resolveProductionUrl: (doc) =>
            new URL(`https://sanity.io/${doc?.slug?.current}`),
          select: (doc) => ({
            focus_keyword: doc.keyPhrase ?? '',
            seo_title: doc.seoTitle ?? '',
            meta_description: doc.metaDescription ?? '',
            focus_synonyms: doc.focus_synonyms ?? [],
          }),
          prepare: (doc) => ({
            title: doc.seoTitle ?? '', // when using `fetch` this is extracted from the <title> tag
            description: doc.metaDescription ?? '', // when using `fetch` this is extracted from the <meta name="description" /> tag
            locale: doc.__i18n_lang ?? 'en-US', // when using `fetch` this is extracted from the `lang` attribute of the root tag
            content: ReactDOMServer.renderToStaticMarkup(
              <PortableText document={doc.content} />
            ), // when using `fetch` this is extracted from `body`. This does not need to be an exact copy of your live website, but should match the semantic structure for proper analysis
          }),
        })
        .title('SEO'),
  ])
}

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['companyInfo', 'logos'].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(GoSettings)
        .child(
          S.list()
            // Sets a title for our new list
            .title('Site Settings')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Company Info')
                .icon(HiInformationCircle)
                .child(
                  S.document()
                    .schemaType('companyInfo')
                    .documentId('companyInfo')
                ),
              S.listItem()
                .title('Logos')
                .icon(RiImageFill)
                .child(S.document().schemaType('logos').documentId('logos')),
            ])
        ),
    ])
