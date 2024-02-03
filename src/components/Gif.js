
function Gif({ gif }) {
    if(gif === null) {
        return <h1>Click for a Gif</h1>
    }

    return <div>        
        <h2>{ gif.data.user.display_name }</h2>
        <img src={ gif.data.images.fixed_height.url } alt={ gif.data.Name }/>
    </div>
};

export default Gif;