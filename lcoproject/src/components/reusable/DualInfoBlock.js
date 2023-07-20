import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoBlock({heading}) {
  return (
    <section className='my-4 py-4 bg-theme'>
      <div className="container">
        <Heading title={heading}/>
        <div className="row">
            <div className="col-8 mx-auto">
                <p className="lead text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quia. Placeat tempore perspiciatis provident totam numquam impedit fuga velit ratione quo, molestiae et ipsa reprehenderit aliquam aut vel optio dolores?</p>
            </div>
            <div className="col-4">
            <div class="card" >
               <img class="card-img-top" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image goes here"/>
               <div class="card-body">
               <h5 class="card-title">Team<b>@PagePerfect</b></h5>
               <p class="card-text">For more projects follow us on insta.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
</div>
            </div>
        </div>
      </div>
    </section >
  )
}
