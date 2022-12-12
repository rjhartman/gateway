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
} from "sanity-codegen";

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
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Parent — `reference`
   *
   *
   */
  parent?: SanityReference<Page>;

  /**
   * Featured Image — `image`
   *
   *
   */
  featuredImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Publish Status — `string`
   *
   *
   */
  publishStatus?: "public" | "hidden" | "private";

  /**
   * SEO — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: "navigation";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Navigation Items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<NavigationItem>>;
}

/**
 * Logos
 *
 *
 */
export interface Logos extends SanityDocument {
  _type: "logos";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * HC Logo — `image`
   *
   * Used on light backgrounds.
   */
  hcLogo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Logo Icon — `image`
   *
   * Used on small screens.
   */
  logoIcon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * HC Logo Icon — `image`
   *
   * Used on small screens and light backgrounds.
   */
  hcLogoIcon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Favicon — `image`
   *
   *
   */
  favicon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Company Information
 *
 *
 */
export interface CompanyInfo extends SanityDocument {
  _type: "companyInfo";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Phone Number — `string`
   *
   *
   */
  phoneNumber?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Hours — `array`
   *
   *
   */
  hours?: Array<SanityKeyed<string>>;

  /**
   * Address — `array`
   *
   *
   */
  address?: Array<SanityKeyed<string>>;

  /**
   * Maps Link — `url`
   *
   *
   */
  mapsLink?: string;
}

/**
 * Home Page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: "homePage";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Hero — `frontHero`
   *
   *
   */
  hero?: FrontHero;

  /**
   * Company History — `companyHistory`
   *
   *
   */
  companyHistory?: CompanyHistory;
}

/**
 * Meta Data
 *
 *
 */
export interface MetaData extends SanityDocument {
  _type: "metaData";

  /**
   * Site Title — `string`
   *
   *
   */
  title?: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;

  /**
   * Front Page — `reference`
   *
   *
   */
  frontPage?: SanityReference<Page>;
}

export type CompanyHistory = {
  _type: "companyHistory";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * History — `blockContent`
   *
   *
   */
  history?: BlockContent;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Seo = {
  _type: "seo";
  /**
   * SEO Title — `string`
   *
   *
   */
  seoTitle?: string;

  /**
   * Meta Description — `text`
   *
   *
   */
  metaDescription?: string;

  /**
   * Key Phrase — `string`
   *
   *
   */
  keyPhrase?: string;

  /**
   * Secondary Key Phrase — `string`
   *
   *
   */
  secondaryKeyPhrase?: string;
};

export type NavigationItem = {
  _type: "navigationItem";
  /**
   * Navigation Text — `string`
   *
   *
   */
  text?: string;

  /**
   * Navigation Item URL — `link`
   *
   *
   */
  navigationItemUrl?: Link;

  /**
   * Children — `array`
   *
   *
   */
  children?: Array<SanityKeyed<NavigationItem>>;
};

export type Link = {
  _type: "link";
  /**
   * Internal Link — `reference`
   *
   * Select pages for navigation
   */
  internalLink?: SanityReference<Page>;

  /**
   * External URL — `url`
   *
   * Use fully qualified URLS for external link
   */
  externalUrl?: string;

  /**
   * Item Type — `string`
   *
   *
   */
  itemType?: "internal" | "external" | "placeholder";
};

export type FrontHero = {
  _type: "frontHero";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Background — `image`
   *
   *
   */
  background?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type BlockContent = Array<SanityKeyed<SanityBlock>>;

export type Documents =
  | Page
  | Navigation
  | Logos
  | CompanyInfo
  | HomePage
  | MetaData;
