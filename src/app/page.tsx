import Link from 'next/link';
import "@/styles/page.css"
export default function Home() {
  return (  
      <div className="index-contens">
        <div className="logo">
          <h2>ATJ <span className="danger">Robot</span></h2>
        </div>
        <div className="pageWrapper">
          <div className="graph-contents">
            <div className="textContent">
              <h1 className="title">หุ่นยนต์ฉีดพ่นเพื่อการเกษตร</h1>
              <p className="subtitle">ลดการสัมผัสสารเคมีโดยตรง ช่วยลดความเสี่ยงต่อสุขภาพของเกษตรกร</p>
              <div className="buttons">
                <Link href="/login-registers"><button className="primaryBtn">Login</button></Link>
              </div>
            </div>

            <div className="imageSection">
              <img src="/logomine1.png" alt="Agriculture Robot" className="robotImage" />
            </div>
          </div>
        </div>
      </div>
  );
}
