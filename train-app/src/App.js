import React from "react";
import * as Components from "./Components";

function App() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Hesap Oluştur</Components.Title>
          <Components.Input type="text" placeholder="İsim giriniz" />
          <Components.Input type="date" />
          <Components.Input type="email" placeholder="E-mail giriniz" />
          <div style={{ display: "flex", gap: "10px", accentColor: "black" }}>
            <Components.Input type="radio" name="gender" value="Erkek" /> Erkek
            <Components.Input type="radio" name="gender" value="Kadın" /> Kadın
            <Components.Input type="radio" name="gender" value="Diğer" /> Diğer
          </div>
          <Components.Input type="password" placeholder="Şifre giriniz" />
          <Components.Input
            type="password"
            placeholder="Şifreyi tekrar giriniz"
          />
          <Components.Button style={{ marginTop: "7px" }}>
            Hesap Oluştur
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Giriş</Components.Title>
          <Components.Input type="text" placeholder="Kullanıcı Adı" />
          <Components.Input type="password" placeholder="Şifre" />
          <Components.Anchor href="#">Şifremi Unuttum</Components.Anchor>
          <Components.Button>Giriş Yap</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>1001 Film</Components.Title>
            <Components.Paragraph>
              Film alıntı ve inceleme diyarına hoşgeldiniz
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Giriş Yap
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Yeniden Hoşgeldiniz !</Components.Title>
            <Components.Paragraph>
              Film alıntı, inceleme ve bilgi diyarına hoşgeldiniz
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Hesap Oluştur
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default App;
