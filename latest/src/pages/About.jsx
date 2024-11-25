import { Book1, Book2, Book3, Book4, Book5, Book6 } from "../components/Book.jsx";

function About() {
    return ( 
    <div>   
      <Book1 bookName1="2022 World Of War" bookPrice="400" />
      <Book2 bookName2="At war on the gothic line" bookPrice="400"/>
      <Book3 bookName3="The time travellers" bookPrice="250" />
      <Book4 bookName4="Time travellers" bookPrice="300"/>
      <Book5 bookName5="Doctor who" bookPrice="240"/>
      <Book6 bookName6="Slugfest" bookPrice="400"/>
    </div>
  );
}

export default About;