import React from 'react'
import "../styles/SectionTitle.css"



function SectionTitle(props) {
    return (
        <div>
            <section>
                <h2 className='section-text'>{props.text}</h2>
            </section>
        </div>
    )
}

export { SectionTitle }