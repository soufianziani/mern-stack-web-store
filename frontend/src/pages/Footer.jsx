import { Link } from "react-router-dom";

const Footer = () => {
return (
<> 


<footer class="bg-white rounded-lg   m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link to="/">  
          <div div class="flex items-center mb-4 sm:mb-0">
            <img
              src="/Logo2.png"
              alt="Logo"
              className="h-10 w-10"
              style={{ width: "90px", height: "45px" }}
            /> </div></Link>
            
           
        </div>
        <hr class="my-6  sm:mx-auto  lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 ShopiTime™. All Rights Reserved.</span>
    </div>
</footer>



 </>
);
};

export default Footer;