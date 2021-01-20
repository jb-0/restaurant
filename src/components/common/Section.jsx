import React from 'react'
import sectionStyles from './Section.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Menu from '../menu/Menu'

export default function Section(props) {
  /* Destructure props to get the relevant variables */
  const {
    childContentfulSectionSectionItemsJsonNode: pageProps,
    detail,
    heading,
    image,
    section,
    subHeading,
  } = props.node

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>
        node.content.some(
          childNode =>
            childNode.nodeType === `text` &&
            childNode.marks.some(mark => mark.type === MARKS.CODE)
        ) ? (
          <div
            dangerouslySetInnerHTML={{ __html: children[0].props.children }}
          />
        ) : (
          <p>{children}</p>
        ),
    },
  }

  return (
    <>
      <div key={section} className={sectionStyles.section}>
        {
          /* If an image exists then render it */
          image ? (
            <div className={sectionStyles.subSection}>
              <img src={image.file.url} alt={image.description} />
            </div>
          ) : null
        }
        <div className={sectionStyles.subSection}>
          {/* To allow full flexibility all fields are conditional so they are not mandated */}
          <h1>{heading ? heading : null}</h1>
          <h2>{subHeading ? subHeading : null}</h2>
          {detail
            ? documentToReactComponents(JSON.parse(detail.raw), options)
            : null}

          {/* Menu specific handling, expectation is that items are provided however still using
          conditional rendering just as a defensive measure, in case input is erroneous for e.g. */}
          {pageProps.targetPage === 'menu' && pageProps.items ? (
            <Menu items={JSON.parse(pageProps.items)} />
          ) : null}
        </div>
      </div>
      {props.lastEntry ? null : <hr></hr>}
    </>
  )
}
