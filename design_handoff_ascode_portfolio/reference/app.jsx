// app.jsx — composición de canvas

const { DesignCanvas, DCSection, DCArtboard, DCNote } = window;

const App = () => (
  <DesignCanvas>
    {/* ───────────── Logos ───────────── */}
    <DCSection
      id="logos"
      title="Logos · símbolo + texto"
      subtitle="4 direcciones · paleta hacker (negro / verde neón / blanco)"
    >
      <DCArtboard id="logo-01" label="01 · <AS/>" width={520} height={320}>
        <Logo1 />
      </DCArtboard>
      <DCArtboard id="logo-02" label="02 · $ AS_" width={520} height={320}>
        <Logo2 />
      </DCArtboard>
      <DCArtboard id="logo-03" label="03 · monograma" width={520} height={320}>
        <Logo3 />
      </DCArtboard>
      <DCArtboard id="logo-04" label="04 · [A/S]" width={520} height={320}>
        <Logo4 />
      </DCArtboard>
    </DCSection>

    {/* ───────────── Página: UX/UI ───────────── */}
    <DCSection
      id="ux"
      title="UX / UI · portfolio"
      subtitle="2 enfoques de la misma información · hover-rich, dark, dev-forward"
    >
      <DCArtboard id="ux-ide" label="A · IDE / Terminal" width={1280} height={820}>
        <PortfolioIDE />
      </DCArtboard>
      <DCArtboard id="ux-editorial" label="B · Editorial dark" width={1280} height={1620}>
        <PortfolioEditorial />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
