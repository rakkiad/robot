import "@/styles/sparying.css"
// import 'boxicons/css/boxicons.min.css';
export default function sparying() {
    return (
        <main className="main-sparying">
            <div className="second-main-sparying">
                <div className="title-sparying">
                    <div className="tail-title-sparying"><div className="head-title-sparying">หุ่</div>นยนต์ฉีดพ่นสำหรับการ</div>
                    <div className="under-sparying">เกษตกรขนาดเล็ก</div>
                </div>
                <div className="body-sparying">
                    <div className="cardContainer-sparying">
                        <div className="box-sparying-connected">
                            <div className="box-header-text">
                                แสดงสถานะการฉีดพ่น
                            </div>
                            <div className="state-sparying">
                                <div className="img-spary">
                                    <img src="/spray.png" alt="" />
                                </div>
                                <div className="calss-one">
                                    <p>ชนิดพืช : </p>
                                    <p>ประเภทของเหลว : </p>
                                    <p>ชื่อสารเคมี : </p>
                                </div>
                                <div className="calss-two">
                                    <p>ปริมาณการใช้สารเคมี : </p>
                                    <p>พื้นที่ : </p>
                                    <p>ระยะเวลา : </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
