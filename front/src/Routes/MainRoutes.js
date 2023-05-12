import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import ServicesHeatinRepairPage from "../Pages/ServicesHeatinRepairPage";
import AboutUsPage from "../Pages/AboutUsPage";
import BestOffersPage from "../Pages/BestOffersPage";
import BestOffers12Page from "../Pages/BestOffers12Page";
import PhotosPage from "../Pages/PhotosPage";
import ReviewPage from "../Pages/ReviewPage";
import LocationPage from "../Pages/LocationPage";
import BookPage from "../Pages/BookPage";
import BlogPage from "../Pages/BlogPage";
import BlogSinglePage from "../Pages/BlogSinglePage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: "/", Element: <HomePage />, id: 1 },
        { link: "/services", Element: <ServicesPage />, id: 2 },
        {
            link: "/heatin_repair",
            Element: <ServicesHeatinRepairPage />,
            id: 3,
        },
        { link: "/about_us", Element: <AboutUsPage />, id: 4 },
        { link: "/best_offers", Element: <BestOffersPage />, id: 5 },
        { link: "/best_offers2", Element: <BestOffers12Page />, id: 6 },
        { link: "/photos", Element: <PhotosPage />, id: 7 },
        { link: "/review", Element: <ReviewPage />, id: 8 },
        { link: "/book", Element: <BookPage />, id: 9 },
        { link: "/location", Element: <LocationPage />, id: 10 },
        { link: "/blog", Element: <BlogPage />, id: 11 },
        { link: "/blog_single", Element: <BlogSinglePage />, id: 12 },
    ];
    return (
        <>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
                    <Route
                        path={item.link}
                        element={item.Element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRoutes;
