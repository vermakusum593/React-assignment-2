 import bookpic1 from "../assets/books/book1.jpg";
 import bookpic2 from "../assets/books/book2.jpg";
 import bookpic3 from "../assets/books/book3.jpg";
 import bookpic4 from "../assets/books/book4.jpeg";
 import bookpic5 from "../assets/books/book5.jpeg";
 import bookpic6 from "../assets/books/book6.png";

 import "../book.css";

 export function Book1(props) {
    
    return(
     <div className="book"> 
        <img src={bookpic1} alt="book picture" className="img" />
        <h2 className="book-title">{props.bookName1}</h2>
        <p className="book-text"> Paul Cornish and kingsley DonaldSon</p>
        <p classname="book-price">Price {props.bookPrice}$</p>
    </div>
    );   
}

export function Book2(props) {
    
    return(
     <div className="book"> 
        <img src={bookpic2} alt="book picture" className="img" />
        <h2 className="book-title">{props.bookName2}</h2>
        <p className="book-text"> Christian Jennings</p>
        <p classname="book-price">Price {props.bookPrice}$</p>
    </div>
    );   
}


export function Book3(props) {
    
    return(
     <div className="book"> 
        <img src={bookpic3} alt="book picture" className="img" />
        <h2 className="book-title">{props.bookName3}</h2>
        <p className="book-text"> Lottie Stride</p>
        <p classname="book-price">Price {props.bookPrice}$</p>
    </div>
    );   
}


export function Book4(props) {
    
    return(
     <div className="book"> 
        <img src={bookpic4} alt="book picture" className="img" />
        <h2 className="book-title">{props.bookName4}</h2>
        <p className="book-text"> Glossomatheia</p>
        <p classname="book-price">Price{props.bookPrice}$</p>
        
    </div>
    );   
}


export function Book5(props) {
    
    return(
     <div className="book"> 
        <img src={bookpic5} alt="book picture" className="img" />
        <h2 className="book-title">{props.bookName5}</h2>
        <p className="book-text"> Al Ewing and Rob Williams</p>
        <p classname="book-price">price{props.bookPrice}$</p>
    </div>
    );   
}


export function Book6(props) {
    
    return(
     <div className="book"> 
        <img src={bookpic6} alt="book picture" className="img" />
        <h2 className="book-title">{props.bookName6}</h2>
        <p className="book-text"> Tucker reed</p>
        <p classname="book-price">price{props.bookPrice}$</p>
    </div>
    );   
}
