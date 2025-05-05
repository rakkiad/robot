'use client';
import { useRouter } from 'next/navigation';
import "@/styles/home.css";
import 'animate.css';
export default function Page() {
    const router = useRouter();
    return (
        <main className='main-home'>
            <div className="dashboard">
                <h1>Dashboard</h1>
                <div className="card-container">
                    <div className="card">
                        <div className="battery-header-icons">
                            <span className="material-symbols-outlined">battery_android_bolt</span>
                        </div>
                        <div className="box-battery">
                            <div className="battery-text">
                                <p>แบตเตอรี่</p>
                                <p>Total</p>
                            </div>
                            <div className="batter-value"></div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="flow-water-header-icons">
                            <span className="material-symbols-outlined">water</span>
                        </div>
                        <div className="box-flow-water">
                            <div className="flow-water-text">
                                <p>อัตราการไหล</p>
                                <p>Total</p>
                            </div>
                            <div className="flow-water-value"></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="leval-water-header-icons">
                            <span className="material-symbols-outlined">water_drop</span>
                        </div>
                        <div className="box-leval-water">
                            <div className="leval-water-text">
                                <p>ระดับน้ำ</p>
                                <p>Total</p>
                            </div>
                            <div className="leval-water-value"></div>
                        </div>
                    </div>


                    <div className="card status-card">
                        <div className="status-header">
                            <div className="status-item">
                                <span className="material-symbols-outlined robot-icon">smart_toy</span>
                                <div className="status-info">
                                    <p>หุ่นยนต์</p>
                                    <div className="robot-state">ON</div>
                                </div>
                            </div>

                            <div className="status-item">
                                <span className="material-symbols-outlined pump-icon">water_pump</span>
                                <div className="status-info">
                                    <p>ปั๊มน้ำ</p>
                                    <div className="pump-state">OFF</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="graph-box">
                    <h2>กราฟการใช้สารเคมีล่าสุด</h2>
                    <div className="haeder-graph-contens">
                        <div className="graph-contens">
                        </div>
                        <div className="data">
                            <h2>ข้อมูลการฉีดพ่น</h2>
                            <div className="sub-data">
                                <p>ชนิดพืช :</p>
                                <p>ประของของเหลว :</p>
                                <p>ชื่อสารเคมี :</p>
                                <p>ปริมาณการใช้สาเคมี :</p>
                                <p>พื้นที่ :</p>
                                <p>ระยะวลา :</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
