import React from "react";
 import * as Components from './Components';

 function App() {
     const [signIn, toggle] = React.useState(true);
      return(
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Kayıt Ol</Components.Title>
                      <Components.Input type='text' placeholder='Ad' />
                      <Components.Input type='text' placeholder='Soyad' />
                      <Components.Input type='text' placeholder='Kullanıcı Adı' />
                      <Components.Input type='email' placeholder='E-posta' />
                      <Components.Input type='password' placeholder='Şifre' />
                      <Components.Input type='password' placeholder='Şifre Tekrar' />
                      <Components.Input type='date' placeholder='Dogum Tarihi' >
                        
                      </Components.Input>
                      <Components.Input type='text' placeholder='cinsiyet' />
                      <Components.Button>Üye Ol</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Giriş Yap</Components.Title>
                       <Components.Input type='email' placeholder='E-posta' />
                       <Components.Input type='password' placeholder='Şifre' />
                       <Components.Anchor href='#'>Şifrenizi mi unuttunuz?</Components.Anchor>
                       <Components.Button>Giriş Yap</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>1001FİLM {<br/>}Hoşgeldiniz </Components.Title>
                      <Components.Paragraph>
                          1001FİLM insanların filimler hakkında konuştuğu sosyal bir platformdur.
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Giriş Yap
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Selamlar, Arkadaşlar</Components.Title>
                        <Components.Paragraph>
                        Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Üye Ol
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
 }

 export default App;