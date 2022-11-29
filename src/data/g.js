// import { useEffect, useState } from 'react';
// import './Main.css'

// function LoadUsers() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetch('./writers.JSON')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setUsers(data);
//             });
//     }, [])
//     return (
//         <div className='container'>
//             {
//                 users.map(user =>
//                     <Writers writers={user}></Writers>
//                 )
//             }
//         </div>
//     )
// }
// function Writers(props) {
//     const [books, setBooks] = useState([]);
//     const { Name, img, Age, bestSellers, booksNumber } = props.writers;
//     const card = { width: '20rem' }
//     const handleButton = () => {
//         console.log('click');
//     }

//     return (
//         <div className="card bg-success p-2 text-dark bg-opacity-50" style={card}>
//             <div className="card-body">
//                 <img className='image' src={img} alt="" />
//                 <h3 className="card-title">{Name}</h3>
//                 <h4 className="card-title">Age:{Age}</h4>
//                 <h6 className="card-title">Book Numbers:{booksNumber}</h6>
//                 <p className="card-text">{bestSellers}</p>
//                 <button onClick={handleButton} className='btn'>Add Member</button>
//             </div>
//         </div>
//     )
// }


// export default LoadUsers;

