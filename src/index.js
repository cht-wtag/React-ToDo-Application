import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const num = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={num} />,
//   document.getElementById('root')
// );



// const formatUser = (user)=> {
//     return(user.firstName + ' ' + user.lastName);

// }
// const name = {
//     firstName: 'Tamal',
//     lastName: 'Chakroborty'
// };
// const element= <h1>Hello, { formatUser(name) } </h1>;


ReactDOM.render(
   <App/>,
    document.getElementById('root')
  );
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
