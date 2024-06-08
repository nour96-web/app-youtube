import React from 'react'

const comm = () => {
    const pers = [
        {
        id:Math.random(),
         imgUrl :"https://as1.ftcdn.net/v2/jpg/02/50/65/22/1000_F_250652209_Q3EWyMPBQBjJlEKkZFKMNhyqGiH7bMAs.jpg",
         name : "personne1", 
         date : "il y a 6 heures", 
         cont : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
         dis : <span class="material-symbols-outlined">thumb_down</span>,
         like : <span class="material-symbols-outlined">thumb_up</span>
        },
        {
        id:Math.random(),
        imgUrl : "https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo=", 
        date : "il y a 4 jours", 
        cont : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        dis : <span class="material-symbols-outlined">thumb_down</span>,
        like : <span class="material-symbols-outlined">thumb_up</span>
        },
        {
        id:Math.random(),
        imgUrl :"https://as1.ftcdn.net/v2/jpg/02/50/65/22/1000_F_250652209_Q3EWyMPBQBjJlEKkZFKMNhyqGiH7bMAs.jpg",
        name : "personne3", 
        date : "il y a 4 mois", 
        cont : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        dis : <span class="material-symbols-outlined">thumb_down</span>,
        like : <span class="material-symbols-outlined">thumb_up</span>
        },
        {
        id:Math.random(),
        imgUrl : "https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo=",
        name : "personne4", 
        date : "il y a 3 semaines", 
        cont : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        dis : <span class="material-symbols-outlined">thumb_down</span>,
        like : <span class="material-symbols-outlined">thumb_up</span>
        }
    ]
  return (
    <div className='comm'>
        {pers.map(el => 
        <div id="cart">
            
            <div className="coord-user">
            <img width={"40px"} src={el.imgUrl} alt="" />
            <div className="c-user">
            <div className="info-user">
            <h4>{el.name}</h4>
            <h6>{el.date}</h6>
            </div>
           
            
            <p>{el.cont}</p>
            </div>
            </div>
            <div className='bottom-info'>
                {el.like} {el.dis} <span>Répondre</span>
            </div>
        </div>
    )}
    </div>
  );
};

export default comm