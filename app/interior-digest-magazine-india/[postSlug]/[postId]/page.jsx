'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './MagazinePost.css'
import Header from '../../../../components/Navbar/Header'
import Omsairam from '../../../../components/Navbar/Omsairam'
import Footer from '../../../../components/Footer/Footer'

const MagazinePost = ({ params }) => {
  const { postId } = params

  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `https://homes.devotionalindia.com/wp-json/wp/v2/posts/${postId}?_embed`
        )

        const data = response.data // Access data directly

        if (data && data.title && data.title.rendered) {
          setTitle(data.title.rendered)
        } else {
          console.error('Title is undefined in the fetched data.')
        }
        if (data && data.content && data.content.rendered) {
          setContent(data.content.rendered)
        } else {
          console.error('Content is undefined in the fetched data.')
        }
      } catch (error) {
        console.error('Error fetching post data:', error)
      }
    }

    fetchPostData()
  }, [postId]) // Removed title from the dependencies

  // Separate useEffect for logging title changes
  useEffect(() => {
    console.log('Title changed:', title)
    console.log('Content changed:', content)
  }, [title, content]) // Include content as a dependency

  return (
    <>
      <Omsairam />
      <Header />
      <div className="magazine-post">
        {title && <h1 className="post-title">{title}</h1>}
        {content && (
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
      <Footer />
    </>
  )
}

export default MagazinePost
