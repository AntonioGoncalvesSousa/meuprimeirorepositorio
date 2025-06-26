import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";

const routes = () => {
    return (
        <Routes>
            <Route path="" element={<Navigate to="/home" />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    )
}

export default routes;