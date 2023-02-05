import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: 'page'

  /**
   * Title — `string`
   *
   *
   */
  title: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: 'slug'; current: string }

  /**
   * Layout — `string`
   *
   *
   */
  layout: 'default' | 'home' | 'contact' | 'sitemap'

  /**
   * Parent — `reference`
   *
   *
   */
  parent?: SanityReference<Page>

  /**
   * Featured Image — `image`
   *
   *
   */
  featuredImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Content — `blockContent`
   *
   *
   */
  content?: BlockContent

  /**
   * Publish Status — `string`
   *
   *
   */
  publishStatus?: 'public' | 'hidden' | 'private'

  /**
   * SEO — `seo`
   *
   *
   */
  seo?: Seo
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: 'navigation'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Navigation Items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<NavigationItem>>
}

/**
 * Logos
 *
 *
 */
export interface Logos extends SanityDocument {
  _type: 'logos'

  /**
   * Name — `string`
   *
   *
   */
  name?: string

  /**
   * Logo — `image`
   *
   *
   */
  logo: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * HC Logo — `image`
   *
   * Used on light backgrounds.
   */
  hcLogo?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Logo Icon — `image`
   *
   * Used on small screens.
   */
  logoIcon?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * HC Logo Icon — `image`
   *
   * Used on small screens and light backgrounds.
   */
  hcLogoIcon?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Favicon — `image`
   *
   *
   */
  favicon?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Company Information
 *
 *
 */
export interface CompanyInfo extends SanityDocument {
  _type: 'companyInfo'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Phone Number — `string`
   *
   *
   */
  phoneNumber?: string

  /**
   * Address — `array`
   *
   *
   */
  address?: Array<SanityKeyed<string>>

  /**
   * Maps Link — `url`
   *
   *
   */
  mapsLink?: string

  /**
   * Maps Embed — `text`
   *
   *
   */
  mapsEmbed?: string

  /**
   * Employee Portal — `url`
   *
   *
   */
  employeePortal?: string

  /**
   * Job Openings — `url`
   *
   *
   */
  jobOpenings?: string
}

/**
 * Home Page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: 'homePage'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Hero — `frontHero`
   *
   *
   */
  hero?: FrontHero

  /**
   * Company History — `companyHistory`
   *
   *
   */
  companyHistory?: CompanyHistory

  /**
   * Services — `services`
   *
   *
   */
  services?: Services
}

/**
 * Meta Data
 *
 *
 */
export interface MetaData extends SanityDocument {
  _type: 'metaData'

  /**
   * Site Title — `string`
   *
   *
   */
  title?: string

  /**
   * URL — `url`
   *
   *
   */
  url?: string

  /**
   * Front Page — `reference`
   *
   *
   */
  frontPage?: SanityReference<Page>
}

/**
 * Form
 *
 *
 */
export interface Form extends SanityDocument {
  _type: 'form'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Title — `string`
   *
   *
   */
  title: string

  /**
   * FormCarry ID — `string`
   *
   *
   */
  formCarryID: string

  /**
   * Fields — `array`
   *
   *
   */
  fields?: Array<SanityKeyed<FormField>>

  /**
   * Submit Button Text — `string`
   *
   *
   */
  submitText: string
}

export type CompanyHistory = {
  _type: 'companyHistory'
  /**
   * Title — `string`
   *
   *
   */
  title: string

  /**
   * History — `blockContent`
   *
   *
   */
  history?: BlockContent

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type Seo = {
  _type: 'seo'
  /**
   * SEO Title — `string`
   *
   *
   */
  seoTitle?: string

  /**
   * Meta Description — `text`
   *
   *
   */
  metaDescription?: string

  /**
   * Key Phrase — `string`
   *
   *
   */
  keyPhrase?: string

  /**
   * Secondary Key Phrase — `string`
   *
   *
   */
  secondaryKeyPhrase?: string
}

export type NavigationItem = {
  _type: 'navigationItem'
  /**
   * Navigation Item — `link`
   *
   *
   */
  link?: Link

  /**
   * Children — `array`
   *
   *
   */
  children?: Array<SanityKeyed<NavigationItem>>
}

export type Link = {
  _type: 'link'
  /**
   * Text — `string`
   *
   *
   */
  text?: string

  /**
   * Internal Link — `reference`
   *
   * Select pages for navigation
   */
  internalLink?: SanityReference<Page>

  /**
   * External URL — `url`
   *
   * Use fully qualified URLS for external link
   */
  externalUrl?: string

  /**
   * Item Type — `string`
   *
   *
   */
  type?: 'internal' | 'external' | 'placeholder'
}

export type FrontHero = {
  _type: 'frontHero'
  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Background — `image`
   *
   *
   */
  background?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Background Video — `file`
   *
   * mp4 format
   */
  backgroundVideo?: { _type: 'file'; asset: SanityReference<any> }

  /**
   * Background Type — `string`
   *
   *
   */
  backgroundType?: 'image' | 'video'

  /**
   * Buttons — `array`
   *
   *
   */
  buttons?: Array<SanityKeyed<Link>>
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  | SanityKeyed<Resturant>
>

export type Services = {
  _type: 'services'
  /**
   * Title — `string`
   *
   *
   */
  title: string

  /**
   * Services — `array`
   *
   *
   */
  services?: Array<
    SanityKeyed<{
      _type: 'service'
      /**
       * Title — `string`
       *
       *
       */
      title: string

      /**
       * Description — `blockContent`
       *
       *
       */
      description?: BlockContent

      /**
       * Image — `image`
       *
       *
       */
      image?: {
        _type: 'image'
        asset: SanityReference<SanityImageAsset>
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
      }

      /**
       * Link — `link`
       *
       *
       */
      link?: Link
    }>
  >
}

export type Resturant = {
  _type: 'resturant'
  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Phone Number — `string`
   *
   *
   */
  phoneNumber?: string

  /**
   * Hours — `string`
   *
   *
   */
  hours?: string

  /**
   * Address — `string`
   *
   *
   */
  address?: string

  /**
   * Menu Link — `url`
   *
   *
   */
  menuLink?: string
}

export type FormField = {
  _type: 'formField'
  /**
   * Type — `string`
   *
   *
   */
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'hidden'

  /**
   * Label — `string`
   *
   *
   */
  label: string

  /**
   * Required — `boolean`
   *
   *
   */
  required: boolean

  /**
   * Options — `array`
   *
   *
   */
  options: Array<SanityKeyed<string>>
}

export type Documents =
  | Page
  | Navigation
  | Logos
  | CompanyInfo
  | HomePage
  | MetaData
  | Form
