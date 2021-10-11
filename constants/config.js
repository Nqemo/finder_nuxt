const config = {
  appTitle: process.env.VUE_APP_TITLE || 'Mondo Flickr Search',
  api:
    process.env.VUE_APP_API ||
    'https://www.flickr.com/services/feeds/photos_public.gne',
}

export { config }
