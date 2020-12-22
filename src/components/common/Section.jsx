import React from 'react'
import sectionStyles from './Section.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer' 

export default function Section(props) {
  return (
    <div key={props.node.section} className="section">
      <div>
        <img className={sectionStyles.sectionImage} src={props.node.image.file.url} alt={props.node.image.description} />
        <h1>{props.node.heading}</h1>
        <h2>{props.node.subHeading}</h2>
        {documentToReactComponents(JSON.parse(props.node.detail.raw))}
      </div>
    </div>
  )
}
