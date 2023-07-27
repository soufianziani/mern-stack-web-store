import React from 'react';

function About() {
  return (
    <>
      {/* <div className="flex flex-col min-h-screen text-center">
  <div className="py-8 lg:py-12  flex-grow">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
      <h2 className="text-3xl leading-9  tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
        About Us
      </h2>
      <div className="mt-6 prose prose-lg text-gray-500">
        <p>Our online store is committed to providing you with the best shopping experience possible. Shopping online has many benefits and advantages:</p>

        <ul className=" list-inside mt-4">
          <li className="mb-2">Convenience - shop from the comfort of your own home</li>
          <li className="mb-2">Variety - access to a wider range of products than physical stores</li>
          <li className="mb-2">Availability - online stores are open 24/7</li>
          <li className="mb-2">Saves Time - easily find what you're looking for and place your order</li>
          <li className="mb-2">Reviews and Feedback - make informed decisions about what to buy</li>
          <li className="mb-2">Easy Comparison - compare prices and products from different retailers</li>
          <li className="mb-2">Safe Payment Options - protect your financial information</li>
        </ul>
      </div>
    </div>
  </div>
</div> */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">

              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                About Us                        </p>
              <p className="mt-3 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </p>
              {/* team work :  */}
              <h1 className="mt-3 text-gray-800 text-3xl font-semibold sm:text-4xl ">Meet our team</h1>
              <li className="flex gap-4 items-center  "   style={{marginTop:"50px"}}>
           
               <div className="flex-none w-24 h-24">
                  <img
                    src="soufiane-image.jpg"
                    className="w-full h-full rounded-full"
                    alt="avatar "
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold sm:text-lg ">Soufiane ZIANI </h4>
                  <p className="text-indigo-600">FullStack Developer</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a href="https://twitter.com">
                      <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                    <a href="https://www.linkedin.com">
                      <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                  </div>
                </div>
                <div  style={{ marginRight:"20px"}}></div>
            
               <div className="flex-none w-24 h-24">
                  <img
                    src="ayoub-image.jpg"
                    className="w-full h-full rounded-full"
                    alt="avatar "
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold sm:text-lg">Ayoub Ait Taghrout</h4>
                  <p className="text-indigo-600">FullStack Developer</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a href="https://twitter.com">
                      <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                    <a href="https://www.linkedin.com">
                      <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                  </div>
                </div>
             
               
              </li>

            </div>
          </div>
        </div>
      </section>


    </>

  );
}

export default About;
