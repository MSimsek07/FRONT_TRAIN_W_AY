import React, { Component } from 'react'
import Components from './components';


export class SinUp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first
      }
    }
    

  render() {
    const [signIn, toggle] = React.useState(true);
    return (
        <div className='Container'>
        <div className='SignUpCotainer' signinIn={signIn}>
            <div className='Form'>
                <div className='Title'><h1>Kayıt Ol</h1></div>
                <div className='Input' type="text" placeholder='Ad'/>
                <div className='Input' type="text" placeholder='Soyad'/>
                <div className='Input' type="text" placeholder='Kullanıcı Adı'/>
                <div className='Input' type="email" placeholder='E-posta'/>
                <div className='Input' type="password" placeholder='Şifre'/>
                <div className='Input' type="password" placeholder='Şifre Tekrar'/>
                <div className='Input' type="date" placeholder='Dogum Tarihi'/>
                <div className='Input' type="text" placeholder='Cinsiyet'/>
                <button className='Button'>Üye Ol</button>
            </div>
        </div>
        <div className='SignInCotainer' signinIn={signIn}>
            <div className='Form'>
                <div className='Title'><h1>Giriş Yap</h1></div>
                <div className='Input' type="email" placeholder='Kullanıcı Adı'/>
                <div className='Input' type="password" placeholder='Şİfre'/>
                <div className='Anchor' href="#">Şİfrenizi mi unuttunuz?</div>
                <button className='Button'>Giriş Yap</button>
            </div>
        </div>
        <div className='OverlayContainer' signinIn={signIn}>
            <div className='Overlay' signinIn={signIn}>
                <div className='LeftOverlayPanel' signinIn={signIn}>
                  <div className='Title'><h1>1001FİLM {<br/>}Hoşgeldiniz </h1></div>
                  <div className='Paragraph'> <p>Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın</p></div>
                  <button className='GhostButton' onClick={()=>toggle(true)}>
                    Giriş Yap
                    </button>
                </div>

                <div className='RightOverlayPanel' signinIn={signIn}>
                    <div className='Title'><h1>Selamlar, Arkadaşlar</h1></div>
                    <div className='Paragraph'> <p>Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın</p></div>
                    <button className='GhostButton' onClick={()=>toggle(false)}>Üye Ol </button>
                </div>
            </div>
        </div>

    </div>
    )
  }
}

export default SinUp