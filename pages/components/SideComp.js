import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const SideComp = (props) => {
    // console.log("props di sidecomp = ",props);
      
  return (
    <div className="side">
        <div id="profil">
            <div className="imgProfil">
                <img id="imgProfil" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/bx_bxs-user-circle_kfbclt.png"/>
            </div>
        </div>
            <p id="username">Dewa Qintoro</p>
            <p id="id">ID:20201161</p>
 
        <div className="menu">
            <Link href="/admin">
                <a>
                    <div className="bgMenu" id="bgKasus">
                    {/* <a href="#home"><i className="fa fa-fw fa-home"></i> Home</a> */}
                    <p id="textSide">Kasus</p>
                    </div>
                </a>
            </Link>
            <Link href="/">
                <a>
                <div className="bgMenu" id="bgPengguna">
                    <p id="textSide">Pengguna</p>
                </div>
                </a>
            </Link>

            <Link href="/persebaran">
                <a>
                    <div className="bgMenu" id="bgPersebaran">
                        <p id="textSide">Persebaran</p>
                    </div>
                </a>
            </Link>
             
        </div>
        <div className="bawah" id="setting">
            <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_settings_hvxc7l.png"/>
        </div>
        <div className="bawah" id="logout">
            <img className="imgBawah" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/mdi_power_settings_new_z0g0h1.png"/>
        </div>
    </div>
  )
}

export default SideComp
