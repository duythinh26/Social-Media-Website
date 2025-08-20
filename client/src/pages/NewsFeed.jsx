import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'
import { dummyPostsData } from '../assets/assets'

const NewsFeed = () => {

    const [newsFeeds, setNewsFeeds] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchNewsFeeds = async () => {
        setNewsFeeds(dummyPostsData)
        setLoading(false)
    }

    useEffect(() => {
        fetchNewsFeeds()
    }, [])

    return !loading ? (
        <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
            {/* Stories and post list */}
            <div>
                <StoriesBar />
                <div className='p-4 space-y-6'>
                    Danh sách bài viết
                </div>
            </div>

            {/* Right Sidebar */}
            <div>
                <div className="">
                    <h1 className="">Nhà tài trợ</h1>
                </div>
                <h1 className="">Tin nhắn gần đây</h1>
            </div>
        </div>
    ) : (
        <Loading />
    )
}

export default NewsFeed