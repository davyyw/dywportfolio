import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import SearchBar from './SearchBar';
import { featuredImage } from "../utilities/imgInsert";
const ImagesPath = process.env.PUBLIC_URL + '/images/';

const Posts = () => {
    useEffect(() => {
        document.title = `DYW-Blog`;
      }, []);

    const [page, setPage] = useState(1);
    const restPath = `https://dywprojects.ca/mindset/wp-json/wp/v2/posts?page=${page}&per_page=3&orderby=date&_embed=true`;
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            if ( response.ok ) {
                const data = await response.json();
                setData([...restData, ...data]);
                setLoadStatus(true);
                if((restData.length+3) >= response.headers.get("X-WP-Total")){
                    document.getElementsByClassName("blogLoadMoreButton")[0].innerText = "No More Posts";
                    document.getElementsByClassName("blogLoadMoreButton")[0].disabled = true;
                    document.getElementsByClassName("blogLoadMoreButton")[0].classList.add("blogLoadMoreButtonDisabled");
                    document.getElementsByClassName("blogLoadMoreButton")[0].classList.remove("blogLoadMoreButton");
                }
            } else {
                setLoadStatus(false);
            }
        }
        fetchData();
    }, [restPath])

    function handleShowMorePosts(){
        setPage(page+1);
      };
    
    return (
        <div className="blogList">
            <div className="blogTitle"                    
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-once="true"
                style={{ 
                    backgroundImage: `url(${ImagesPath}reading.jpg)` ,
                }}
            >
            </div>
            <div 
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-once="true"
            className="blogHeading">
                <h1>Technical Log</h1>
                <SearchBar/>
            </div>
        { isLoaded ?
            <>
                <section className="blogCardWrapper">
                {restData.map(post => 
                    <article key={post.id} id={`post-${post.id}`}
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="700"
                    data-aos-once="true">
                        {post._embedded['wp:featuredmedia'][0] &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                        }
                        <div className="blogInfo">
                            <Link to={`/blog/${post.id}`}><h2>{post.title.rendered}</h2></Link>
                            <p>By: {post._embedded.author[0].name} On: {post.date.slice(0,10)}</p>
                            <div className="entry-content" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>
                        </div>
                    </article>
                )}
                <button className="blogLoadMoreButton" onClick={handleShowMorePosts}>Load more</button>
                </section>
            </>
        : 
            <Loading />
        }
        </div>
    )
}

export default Posts;
