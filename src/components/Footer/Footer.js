import React from 'react';


class Footer extends React.Component{
render(){
    return(
        <div>
            <footer class="footer">
        
        <img class="flaming-logo__footer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_1B3JUeTEJLw67rTTB692AdIKu2a8kmQdD4CLEwJA-_IFxvxg"
            alt="flamingcontroller" />
        <p> &copy;Get Some Game 2020</p>

   
        <a href="https://www.facebook.com/GameStoresSA/"  rel="noopener"> <img className ="facebook_footer"
                src="https://cdn1.iconfinder.com/data/icons/social-networks-3/512/facebook-512.png"
                alt="facebook logo"/></a>

        <a href="https://www.instagram.com/gamestheshop/?hl=en"  rel="noopener"> <img classname ="instagram_footer"
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_color-512.png"
                alt="instagram logo"/></a>

                
    </footer>
        </div>
    )
}
}

export default Footer