import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
        <img class="mb-4" src={props.img} alt=""/>
            <p class="mb-4">{props.comment}</p>
            <h5>{props.name}</h5>
            <span class="text-primary">{props.profession}</span>
    </div>
  )
}
export default TestimonialCard
