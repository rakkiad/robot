"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import "@/styles/sidebar.css"

export default function Sidebar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="container">
            <div className={`menu-icon ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}>
                <span className="material-symbols-outlined">menu</span>
            </div>

            <aside className={isSidebarOpen ? "active" : ""}>
                <div className="top">
                    <div className="logo">
                        <img src="/logomine1.png" alt="ATJ Robot Logo" />
                        <h2>ATJ <span className="danger">Robot</span></h2>
                    </div>
                    <div className="close" id="close-btn" onClick={toggleSidebar}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                </div>

                <div className="sidebar">
                    <Link href="/home" className={pathname === "/home" ? "active" : ""}>
                        <span className="material-symbols-outlined">grid_view</span>
                        <div className="tooltip">Dashboard</div>
                        <h3>Dashboard</h3>
                    </Link>

                    <Link href="/graph" className={pathname === "/graph" ? "active" : ""}>
                        <span className="material-symbols-outlined">monitoring</span>
                        <div className="tooltip">แสดงกราฟ</div>
                        <h3>แสดงกราฟ</h3>
                    </Link>

                    <Link href="/history" className={pathname === "/history" ? "active" : ""}>
                        <span className="material-symbols-outlined">history</span>
                        <div className="tooltip">ประวัติการทำงาน</div>
                        <h3>ประวัติการทำงาน</h3>
                    </Link>

                    <Link href="/settings" className={pathname === "/settings" ? "active" : ""}>
                        <span className="material-symbols-outlined">settings</span>
                        <div className="tooltip">ตั้งค่า</div>
                        <h3>ตั้งค่า</h3>
                    </Link>
                    <div className="sidebar-footer">
                        <div className="user-profile">
                            <img src="/avatar.jpg" alt="User Profile" className="profile-pic" />
                            <div>
                                <h3>ชื่อผู้ใช้</h3>
                            </div>
                        </div>
                    </div>
                    <Link href="/">
                        <span className="material-symbols-outlined">logout</span>
                        <div className="tooltip">Logout</div>
                        <h3>Logout</h3>
                    </Link>
                </div>
            </aside>
        </div>
    )
}
