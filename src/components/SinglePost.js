import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import SearchBar from './SearchBar';
import { featuredImage } from "../utilities/imgInsert";
const ImagesPath = process.env.PUBLIC_URL + '/images/';

const SinglePost = () => {

    const { id } = useParams();
    const restPath = `https://dywprojects.ca/mindset/wp-json/wp/v2/posts/${id}?_embed=true`;
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <div className="singleBlog">
            <div className="blogTitle"                    
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-once="true"
                style={{ 
                    backgroundImage: `url(${ImagesPath}reading.jpg)`
                }}
            >
            </div>
        { isLoaded ?
            <>
                <article id={`post-${restData.id}`}>
                    <h2>{restData.title.rendered}</h2>
                    <p className="singleBlogInfo">By: {restData._embedded.author[0].name} On: {restData.date.slice(0,10)}</p>
                    {restData._embedded['wp:featuredmedia'][0] &&
                        <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                    }
                    <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}></div>
                </article>
                <nav className="posts-navigation">
                    {restData.previous_post['id'] &&
                        <Link to={`/blog/${restData.previous_post['id']}`} className="prev-post">Previous: {restData.previous_post['title']}</Link>
                    }
                    {restData.next_post['id'] &&
                        <Link to={`/blog/${restData.next_post['id']}`} className="next-post">Next: {restData.next_post['title']}</Link>
                    }
                </nav>
            </>
        : 
            <Loading />
        }
        </div>
    )
}

export default SinglePost;
