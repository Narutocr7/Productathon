import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function InfoBlock({heading}) {
  return (
    <section className='bg-theme my-5 py-4'>
      <div className="container">
        <Heading title={heading}/>
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aspernatur sequi laboriosam placeat ipsa, voluptas eveniet deserunt enim consequuntur fuga praesentium eos aliquam quas quis deleniti repudiandae inventore dolorem, quod ut. Harum impedit iure molestias porro autem similique voluptatibus at amet quo nulla neque itaque quisquam, et repellendus adipisci fugiat consequatur animi est qui tenetur fuga quia incidunt! Eaque, inventore.
                </p>
                <Link to="/page-2">
                    <button className='btn btn-warning btn-lg'>
                      {heading}
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
