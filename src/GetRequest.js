import React, {useEffect, useState} from 'react';



function GetRequest() {
    const [posts, setPosts] = useState([]) // new

	useEffect(() => {
		fetch("http://localhost/labb2-olle/wp-json/wp/v2/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
	}, [])

    console.log(posts)


    return (
        <>
        {posts.map((post) => (
            <div key={post.id}>
            <h2>{post.title.rendered}</h2>
            <p>{post.content.rendered}</p>
            </div>
        ))}
        </>
        
    )
}


export default GetRequest;
