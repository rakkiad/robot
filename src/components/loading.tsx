import "@/styles/loading.css"
import 'boxicons/css/boxicons.min.css';
export default function Page() {
    return (
        <main className="main-loading">
            <div className="second-main-loading">
                <div className="title-loading">
                    <div className="tail-title-loading"><div className="head-title-loading">หุ่</div>นยนต์ฉีดพ่นสำหรับการ</div>
                    <div className="under-loading">เกษตกรขนาดเล็ก</div>
                </div>
                <div className="body-loading">
                    <div className="cardContainer-loading">
                        <div className="box-wifi-connected">
                            <div className="box-header-text">
                                แสดงสถานะหุ่นยนต์
                            </div>
                            <div className="display-wifi-connected">
                                <div className="box-icons">
                                    <i className='bx bx-wifi-off'></i>
                                </div>
                                <div className="box-footer-text">
                                    ไม่มีการเชื่อมต่อ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}