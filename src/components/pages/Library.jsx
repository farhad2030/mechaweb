import React, { } from 'react'
import { Fade, Transform, FadeTransform, Loop } from 'react-animation-components'
import LibraryItem from '../layout/LibraryItem'



//image
import books from '../../images/books.png'
import projects from '../../images/projects.png'
import thesis from '../../images/thesis.png'
import { Link } from 'react-router-dom'

const Library = () => {
   return (
      <div className="page">
         <div className="container">
            <h1 className="mb-4">Library</h1>

            <div className="row center">


               <div className="offset-lg-3 col-lg-6  col-md-12 col-sm-12">
                  <Link to="library/books">
                     <LibraryItem name="BOOKS" image={books} />
                  </Link>
               </div>

               <div className="offset-lg-3 col-lg-6  col-md-12 col-sm-12">
                  <Link to="library/thesis">
                     <LibraryItem name="THESIS" image={thesis} />
                  </Link>
               </div>

               <div className="offset-lg-3 col-lg-6  col-md-12 col-sm-12">
                  <Link to="library/projects">
                     <LibraryItem name="PROJECTS" image={projects} />
                  </Link>
               </div>

               <div className="offset-lg-3 col-lg-6  col-md-12 col-sm-12">
                  <Link to="library/questions">
                     <LibraryItem name="QUESTIONS" image={books} />
                  </Link>
               </div>


            </div>

         </div >
      </div >
   )
}
export default Library;

