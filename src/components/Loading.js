const ImagesPath = process.env.PUBLIC_URL + '/images/';

const Loading = () => {
    
    return (
        <img className="loadingImage" src={`${ImagesPath}spinner.gif`} alt="Loading" id="loading" />
    )

}

export default Loading
