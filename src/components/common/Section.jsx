import React from 'react'
import sectionStyles from './Section.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { MARKS } from '@contentful/rich-text-types'

export default function Section(props) {
  const options = {
    renderMark: {
      [MARKS.CODE]: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
  }

  return (
    <>
      <div key={props.node.section} className={sectionStyles.section}>
        {
          /* If an image exists then render it */
          props.node.image ? (
            <div className={sectionStyles.subSection}>
              <img
                src={props.node.image.file.url}
                alt={props.node.image.description}
              />
            </div>
          ) : null
        }
        <div className={sectionStyles.subSection}>
          {/* To allow full flexibility all fields are conditional so they are not mandated */}
          <h1>{props.node.heading ? props.node.heading : null}</h1>
          <h2>{props.node.subHeading ? props.node.subHeading : null}</h2>
          {props.node.detail
            ? documentToReactComponents(
                JSON.parse(props.node.detail.raw),
                options
              )
            : null}
        </div>
      </div>
      <hr></hr>
    </>
  )
}
