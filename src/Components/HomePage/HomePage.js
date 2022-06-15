function LandingFrame() {
    const style = {
        // "background-image": `url(https://image.winudf.com/v2/image1/YXBwLm5pZnUuc2ltcGxldG9kb19zY3JlZW5fMF8xNjI2ODk4NDU5XzA1OQ/screen-0.jpg?fakeurl=1&type=.webp)`,
        // "background-image": `url(https://miro.medium.com/max/850/1*XyUnGNSPwZJYl0wng2w92Q.jpeg)`,
        backgroundImage: `url(https://miro.medium.com/max/1400/1*aDRqWMh-tBnxM8wRNUpN3w.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}></div>
}


function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}
export default HomePage