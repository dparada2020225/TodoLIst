function LandingFrame() {
    const style = {
        backgroundImage: `url(https://img.freepik.com/foto-gratis/circulo-neon-fondo-calle-oscura-reflejo-neon-azul-rojo-sobre-asfalto_129911-28.jpg?w=900)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}></div>
}


function HomePage() {
    return <div> <LandingFrame />  </div>
}
export default HomePage