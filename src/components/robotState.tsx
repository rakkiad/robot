import "@/styles/robotState.css"
// import 'boxicons/css/boxicons.min.css';
export default function robotState() {
    return (
        <main className="main-robotstate">
            <div className="second-main-robotstate">
                <div className="title-robotstate">
                    <div className="tail-title-robotstate"><div className="head-title-robotstate">หุ่</div>นยนต์ฉีดพ่นสำหรับการ</div>
                    <div className="under-robotstate">เกษตกรขนาดเล็ก</div>
                </div>
                <div className="body-robotstate">
                    <div className="cardContainer-robotstate">
                        <div className="box-state-connected">
                            <div className="box-header-text">
                                แสดงสถานะหุ่นยนต์
                            </div>
                            <div className="state-divied">
                                <div className="robot">
                                    <div className="robotstate"></div>
                                    <p>หุ่นยนต์</p>
                                </div>
                                <div className="battery">
                                    <div className="battery-value"></div>
                                    <p>แบตเตอรี่</p>
                                </div>
                                <div className="pump">
                                    <div className="pump-state"></div>
                                    <p>ปั้มน้ำ</p>
                                </div>
                                <div className="flowsenser">
                                    <div className="flow-rate"></div>
                                    <p>อัตราการไหล</p>
                                </div>
                                <div className="water">
                                    <div className="water-lavel"></div>
                                    <p>ระดับน้ำ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
