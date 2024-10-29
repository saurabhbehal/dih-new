'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import Image from 'next/image'

const WordPressPosts = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [posts, setPosts] = useState([])
  const [recentPosts, setRecentPosts] = useState([])
  const [initialPostsCount, setInitialPostsCount] = useState(15)
  const [postsCountToLoad, setPostsCountToLoad] = useState(15)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://homes.devotionalindia.com/wp-json/wp/v2/categories'
        )
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching WordPress categories:', error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          selectedCategory
            ? `https://homes.devotionalindia.com/wp-json/wp/v2/posts?categories=${selectedCategory}&_embed&per_page=${initialPostsCount}`
            : `https://homes.devotionalindia.com/wp-json/wp/v2/posts?_embed&per_page=${initialPostsCount}`
        )
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching WordPress posts:', error)
      }
    }

    fetchPosts()
  }, [selectedCategory, initialPostsCount])

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(
          `https://homes.devotionalindia.com/wp-json/wp/v2/posts?per_page=5&_embed`
        )
        setRecentPosts(response.data)
      } catch (error) {
        console.error('Error fetching recent WordPress posts:', error)
      }
    }

    fetchRecentPosts()
  }, [])

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  const loadMorePosts = async () => {
    try {
      const response = await axios.get(
        selectedCategory
          ? `https://homes.devotionalindia.com/wp-json/wp/v2/posts?categories=${selectedCategory}&_embed&per_page=${postsCountToLoad}&offset=${posts.length}`
          : `https://homes.devotionalindia.com/wp-json/wp/v2/posts?_embed&per_page=${postsCountToLoad}&offset=${posts.length}`
      )
      setPosts((prevPosts) => [...prevPosts, ...response.data])
    } catch (error) {
      console.error('Error fetching more WordPress posts:', error)
    }
  }

  return (
    <>
      <Omsairam />
      <Header />
      <div className="mx-auto w-full mb-16">
        <div className="magazine">
          <h1 className="text-6xl sm:font-bold mb-4">
            {' '}
            Inspiring Interior News & Advices by Top Experts
          </h1>
        </div>
        <h1 className="text-center text-4xl font-bold mt-8">
          Timeless Collection of Our{' '}
          <span className="text-orange-600">Interior</span> &{' '}
          <span className="text-green-500">Architectural</span> Insights
        </h1>
        <p className="text-center text-lg px-8 pt-4">
          Welcome to Our Magazine Digest Page, Now Check Exclusive collection of
          Interior Designs ideas, advices and inspirations by our seasoned
          experts. We work tirelessly to bring you some of the finest
          architectural ideas and advices, apart from that we bring you detailed
          collection of some of our exclusive trending projects, and the
          technical know how on the execution of the process. Check Us out and
          if you have any upcoming project, just connect with us and we&apos;l
          make sure you get the best out of it.
        </p>
        <div className="flex items-center mt-8 w-full overflow-x-auto px-4 ">
          <div className="flex items-center mx-auto gap-4 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-gray-200 shadow-sm'
                } categoryButton rounded-lg transition-transform transform hover:scale-105 my-auto mt-4 whitespace-nowrap md:mr-0`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:flex ">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8 my-4 max-w-[1366px] mx-auto">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/interior-digest-magazine-india/${post.slug}/${post.id}`}
              >
                <div
                  key={post.id}
                  className="bg-white h-96 p-4 mx-4 border rounded cursor-pointer shadow-md transition-transform transform hover:scale-105"
                >
                  {post._embedded && post._embedded['wp:featuredmedia'] && (
                    <Image
                      width={1000}
                      height={1000}
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text}
                      className="mb-2 w-full h-52 object-cover rounded-t"
                    />
                  )}
                  <div className="flex flex-col justify-between h-[40%]">
                    <h2 className="text-lg font-bold mb-2">
                      {post.title.rendered}
                    </h2>
                    <p className="text-gray-500 text-sm mb-0">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-green-500 text-white  font-bold py-2 px-8 rounded"
                onClick={loadMorePosts}
              >
                Load More..
              </button>
            </div>
          </div>
          {/* Recent Posts Section */}
          <div className="recent-posts mr-4 p-8 rounded h-auto">
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="recent-post-item rounded shadow-lg shadow-indigo-500/40 p-2 mt-4 bg-white"
              >
                <Link
                  href={`/interior-digest-magazine-india/${post.slug}/${post.id}`}
                  className="flex gap-2"
                >
                  {post._embedded && post._embedded['wp:featuredmedia'] && (
                    <Image
                      width={100}
                      height={10}
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text}
                      className="mb-2  object-cover rounded"
                    />
                  )}
                  <h3 className="text-sm font-semibold mb-2">
                    {post.title.rendered}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mb-0">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            ))}
            <div>
              <h2 className="text-2xl font-bold mt-8 underline">
                Contact Info
              </h2>

              <h3 className="text-sm font-bold mt-4">
                Designing & Operations Office
              </h3>
              <p className="mt-2">
                25/42, A Block, Middle Circle, Connaught Place, New Delhi -
                110001 ( Near Rajiv Chowk Metro Stn, Gate No.8 )
              </p>
              <h2 className="text-2xl font-bold mt-8 underline ">
                Corporate Industrial Unit
              </h2>
              <p className="mt-2">
                G - 984, Narela DSIIDC Industrial Area, New delhi - 110040
              </p>

              <h2 className="text-2xl font-bold mt-8 underline ">
                {' '}
                Upcoming Offices
              </h2>
              <p className="mt-2">
                * M3M Complex, Golf Estate,
                <br />
                Sector 65, Golf Course Extn Road,
                <br />
                Gurgaon
                <br />
                * Near Sector 15 Metro Station,
                <br />
                Sector 15, Noida
                <br />
                * Shop No 61, Golf Links Market,
                <br />
                Golf Links, New Delhi - 110003
                <br />* 61, Panchkuian Marg New Delhi - 110001
              </p>
              <h2 className="text-2xl font-bold mt-8 underline">
                {' '}
                Industrial Units
              </h2>
              <p className="mt-2">
                {' '}
                A-195, Kirti Nagar
                <br />
                * Sector 4, IMT Manesar
                <br />
                * Sector 57, HSIDC Industrial, Kundli
                <br />* Plt No16, Near NIT, Faridabad
              </p>
              <h2 className="text-2xl font-bold mt-8 underline">
                Hardware & Import Outlet
              </h2>
              <p className="mt-2">
                1/44, Shop No - 3, WHS, Kirti Nagar
                <br />
                New Delhi - 110015 Associate Appliances & Experience Center
                <br />
                1/1, Tilak Nagar, New Delhi - 110058
              </p>

              <h2 className="text-2xl font-bold mt-8 underline">
                Associate Experience Centers
              </h2>
              <p className="mt-2">
                {' '}
                1/1, Tilak Nagar, New Delhi - 110058
                <br />
                0-9899264978 / 0-9582827928/ <br />
                0-9899239097, Landline - 01144127897
                enquiry@designindiankitchen.com
                <br />
                Monday - Saturday: 10:30 AM - 7:30 PM Sunday: 11:00 AM - 7:00 PM
                Only For Site Visits
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WordPressPosts
