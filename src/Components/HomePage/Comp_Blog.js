import React from 'react'
import './Comp_Blog.css'
function Comp_Blog() {
    return (
        <div className='blogs-container'>
            {/* <div className ='comp-cards'>
                <div>
                    <img src="Images/img1.jpg" className='compImg' />
                    <div>
                        <p>Student Chapter</p>
                    </div>
                    
                </div>

                <div>
                    <img src="Images/img2.jpeg" className='compImg' />
                    <div>
                        <p>Competition</p>
                    </div>
                    
                </div>

                <div>
                    <img src="Images/img3.jpeg" className='compImg' />
                    <div>
                        <p>Volunteer</p> 
                    </div>
                    
                </div>
            </div> */}

{/* below blog cards */}

            <div className ='blog-cards'>
                <p>OUR BLOGS</p>
                
                <div>
                    <div className='indivisual-cards left-blogs'>
                        <div >
                            <img src="Images/blog.png" className='compImg' />
                            <div>
                                <p className='blog-tagline'>“When a neighbor saw a young dog who was too weak to climb out of a gutter, they called our rescue team.”</p>
                                <p className='blog-writter'>Anushka Sharma</p>
                                <p className='blog-date'>August 12, 2021</p>
                            </div>
                        </div>
                        <hr className='hr'></hr>

                        <div>
                            <img src="Images/blog.png" className='compImg' />
                            <div>
                                <p className='blog-tagline'>“When a neighbor saw a young dog who was too weak to climb out of a gutter, they called our rescue team.”</p>
                                <p className='blog-writter'>Anushka Sharma</p>
                                <p className='blog-date'>August 12, 2021</p>
                            </div>
                        </div>
                        <hr className='hr'></hr>

                        <div>
                            <img src="Images/blog.png" className='compImg' />
                            <div>
                                <p className='blog-tagline'>“When a neighbor saw a young dog who was too weak to climb out of a gutter, they called our rescue team.”</p>
                                <p className='blog-writter'>Anushka Sharma</p>
                                <p className='blog-date'>August 12, 2021</p>
                            </div>
                        </div>
                        <hr className='hr'></hr>
                    </div>

                    {/* <div className='indivisual-cards right-blogs'>
                        <div >
                            <img src="Images/img3.jpeg" className='compImg' />
                            <div>
                                <p className='blog-tagline'>bfhfbhejjfn</p>
                                <p className='blog-description'>bfhfbhejjfnbvfvhbfhbvjdfhbvhfhvbdhfb</p>
                            </div>
                        </div>
                        <div>
                            <img src="Images/img3.jpeg" className='compImg' />
                            <div>
                                <p className='blog-tagline'>bfhfbhejjfn</p>
                                <p className='blog-description'>bfhfbhejjfnbvfvhbfhbvjdfhbvhfhvbdhfb</p>
                            </div>
                        </div>
                        <div>
                            <img src="Images/img3.jpeg" className='compImg' />
                            <div>
                                <p className='blog-tagline'>bfhfbhejjfn</p>
                                <p className='blog-description'>bfhfbhejjfnbvfvhbfhbvjdfhbvhfhvbdhfb</p>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
            

           

            {/* <div className='Load-Blog'>
                <button>Load Blog</button>
            </div> */}
            
        </div>
    )
}

export default Comp_Blog
