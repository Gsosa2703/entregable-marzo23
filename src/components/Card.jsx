
function Card({user}) {
  return ( 
     user &&
    <div className="container-card"> 
      <h3>Your personal info is:</h3>
      <h4>First Name : {user.firstName}</h4>
      <h4>Last Name : {user.lastName}</h4>
      <h4>Age : {user.age}</h4>
    </div>
   );
}

export default Card;
