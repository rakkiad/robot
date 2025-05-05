"use client";
import "@/styles/history.css"
import { useState } from "react";

const FilterBar = () => {
    const [plant, setPlant] = useState("");
    const [liquidType, setLiquidType] = useState("");
    const [timeRange, setTimeRange] = useState("");
    const [customDate, setCustomDate] = useState("");

    const handleSearch = () => {
        console.log({ plant, liquidType, timeRange, customDate });
    };

    return (
        <main className="main-history">
            <div className="second-main-history">
                <div className="title-history">
                    <div className="tail-title-history">ประวัติการทำงาน</div>
                </div>
                <div className="body-history">
                    <div className="container-history">

                        <div className="filter-container">
                            <div className="filter-item">
                                <label className="filter-label">เลือกชนิดพืช:</label>
                                <select
                                    value={plant}
                                    onChange={(e) => setPlant(e.target.value)}
                                    className="filter-select"
                                >
                                    <option value="">-- เลือก --</option>
                                    <option value="corn">ข้าวโพด</option>
                                    <option value="tomato">มะเขือเทศ</option>
                                    <option value="other">อื่นๆ</option>
                                </select>
                            </div>

                            {/* ประเภทของเหลว */}
                            <div className="filter-item">
                                <label className="filter-label">ประเภทของเหลว:</label>
                                <select
                                    value={liquidType}
                                    onChange={(e) => setLiquidType(e.target.value)}
                                    className="filter-select border rounded p-1"
                                >
                                    <option value="">-- เลือก --</option>
                                    <option value="chemical">สารเคมี</option>
                                    <option value="fertilizer">ปุ๋ย</option>
                                    <option value="water">น้ำ</option>
                                </select>
                            </div>

                            {/* ช่วงเวลา */}
                            <div className="filter-item">
                                <label className="filter-label">ช่วงเวลา:</label>
                                <select
                                    value={timeRange}
                                    onChange={(e) => setTimeRange(e.target.value)}
                                    className="filter-select border rounded p-1"
                                >
                                    <option value="">-- เลือก --</option>
                                    <option value="today">วันนี้</option>
                                    <option value="week">สัปดาห์นี้</option>
                                    <option value="month">เดือนนี้</option>
                                </select>
                            </div>

                            {/* ช่วงเวลากำหนดเอง */}
                            <div className="filter-item">
                                <label className="filter-label">ช่วงเวลา (กำหนดเอง):</label>
                                <input
                                    type="date"
                                    value={customDate}
                                    onChange={(e) => setCustomDate(e.target.value)}
                                    className="filter-date"
                                />
                            </div>

                            <button
                                onClick={handleSearch}
                                className="filter-button"
                            >
                                ค้นหา
                            </button>
                        </div>
                        <div className="button-box">
                            <button className="button-view">ดูประวัติทั้งหมด</button>
                            <button className="button-export">ดาวน์โหลดข้อมูล</button>
                        </div>
                    </div>
                    <div className="card-table-history">
                        <table className="table-history">
                            <thead>
                                <tr>
                                    <th>วันที่</th>
                                    <th>ชนิดพืช</th>
                                    <th>ประเภทของเหลว</th>
                                    <th>ชื่อสารเคมี</th>
                                    <th>พื้นที่ที่ฉีดพ่น(ไร่)</th>
                                    <th>ปริมาณที่ใช้(ลิตร)</th>
                                    <th>ระยะเวลา</th>
                                    <th>หมายเหตุ</th>
                                    <th>แก้ไข้</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>sdas</td>
                                    <td>dsada</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FilterBar;
