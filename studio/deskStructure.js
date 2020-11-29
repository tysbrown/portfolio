import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdBook } from "react-icons/md";
import { MdLabel } from "react-icons/md";
import { MdDescription } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'portfolioProject', 'homepage', 'about'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Homepage")
        .icon(MdHome)
        .child(
          S.editor()
            .id('homepage')
            .schemaType("homepage")
            .documentId("singleton-homepage")
        ),
      S.listItem()
        .title("About Page")
        .icon(MdHome)
        .child(
          S.editor()
            .id('about')
            .schemaType("about")
            .documentId("singleton-about")
        ),
      S.listItem()
        .title('Blog')
        .icon(MdBook)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Portfolio Projects')
        .icon(MdDescription)
        .schemaType('portfolioProject')
        .child(S.documentTypeList('portfolioProject').title('Portfolio Projects')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(MdLabel)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
