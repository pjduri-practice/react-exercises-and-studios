export default function BookList() {
   let pageTitle = "Book Recommendations"
   let book1 = "https://2.bp.blogspot.com/-pU8Fcgx1Ohs/W0yzUUdB-wI/AAAAAAAATW8/z08msrQv5iMVXCcRcMZ2UHuaKE58Oh1oACLcBGAs/s1600/stranger.jpg"
   let book2 = "https://m.media-amazon.com/images/I/61MjUhKRhgL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51-XqpZJRDL._AC_UF1000,1000_QL80_.jpg"

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Stranger in a Strange Land" />
         <img src={book2} alt="The Shimmering Door" />
         <img src={book3} alt="The Black Chalice" />
      </div>      
   );
}