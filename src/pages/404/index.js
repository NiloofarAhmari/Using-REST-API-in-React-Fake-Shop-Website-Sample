import React from 'react'
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" , minHeight: "70vh" }}>
            <h1>خطای 404</h1>
            <p>صفحه مورد نظر یافت نشد <Link to="/">برگشت به صفحه اصلی</Link></p>
        </div>
    )
}
