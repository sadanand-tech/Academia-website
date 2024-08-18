import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'
import Footer from '../common/footer/Footer'

const CourseHome = () => {
  return (
    <>
    <Back tittle ="Explore Courses" />
    <CoursesCard/>
    <OnlineCourses/>
    <Footer />

    </>
  )
}

export default CourseHome