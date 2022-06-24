import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { featuredImage } from "../utilities/imgInsert";
import Loading from './Loading';
const ImagesPath = process.env.PUBLIC_URL + '/images/';


function PageSearch() {
    var { value } = useParams();
    value = value.replace(/\s+/g, "+");
    const [blogData, setBlogData] = useState([]);
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            const res = await fetch(`https://dywprojects.ca/mindset/wp-json/wp/v2/search?search=${value}&subtype=post`);
            const tempData = await res.json();
            setBlogData(tempData);
          }
          fetchBlog();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            var temp = [];
            for (let element of blogData) {
                const response = await fetch(`https://dywprojects.ca/mindset/wp-json/wp/v2/posts/${element['id']}?_embed=true`);
                if ( response.ok ) {
                    const data = await response.json();
                    temp.push(data);
                } else {
                    return;
                }
            }
                setData(temp);
                setLoadStatus(true);
        }
        fetchData();
    }, [blogData])

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
            <div className="blogHeading">
                <h1>Searching Results</h1>
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
                </section>
            </>
        : 
            <Loading />
        }
        </div>
    )
}
export default PageSearch;