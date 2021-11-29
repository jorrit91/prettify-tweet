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
};

/**
 * Homepage
 *
 *
 */
export interface HomepageSingleton extends SanityDocument {
  _type: "homepage-singleton";

  /**
   * fields — `object`
   *
   *
   */
  fields?: {
    _type: "fields";
    /**
     * content — `object`
     *
     *
     */
    content?: {
      _type: "content";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;
    };

    /**
     * seo — `object`
     *
     *
     */
    seo?: {
      _type: "seo";
      /**
       * Title — `string`
       *
       * SEO title of the page
       */
      title?: string;

      /**
       * Add ' - PROJECT_NAME' to the title — `boolean`
       *
       *
       */
      addTitleSuffix?: boolean;

      /**
       * og:description — `text`
       *
       *
       */
      description?: string;

      /**
       * og:image (1200 x 630) — `image`
       *
       *
       */
      image?: {
        _type: "image";
        asset: SanityAsset;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      };

      /**
       * No index — `boolean`
       *
       *
       */
      noindex?: boolean;

      /**
       * No follow — `boolean`
       *
       *
       */
      nofollow?: boolean;
    };
  };
}

export type Documents = HomepageSingleton;
