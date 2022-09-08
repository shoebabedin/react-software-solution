import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";
import ToTop from "../ToTop/ToTop";

const Layout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          // We pretend to be fetching data from a server and it takes 3 seconds
          await new Promise((resolve) => setTimeout(resolve, 3000));
          // When the data "fetching" process is complete, we will set the title and content
          
          setLoading(false);
        };
     
        fetchData();
      }, []);
      
    return (
        <main id="main">
            {loading &&  <Preloader/>}
            <Navbar />
            <section id="page_content" className="content">
            <Outlet />
            </section>
            <Footer/>
            <ToTop/>
        </main>
    );
};

export default Layout;