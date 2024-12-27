
import './App.css';
import {useState , useEffect} from 'react';
import DataTable from './DataTable';

function App() {
//   const [data, setData] = useState(
//     [
    
//         { date: "2022-09-01", views: 100, article: "Article 1" },
    
//         { date: "2023-09-01", views: 100, article: "Article 1" },
    
//         { date: "2023-09-02", views: 150, article: "Article 2" },
    
//         { date: "2023-09-02", views: 120, article: "Article 3" },
    
//         { date: "2020-09-03", views: 200, article: "Article 4" }
    
//     ]
//   );

//   const arr = data;

//   const [sortedData, setSortedData] = useState(data);

//   let key = 0;


//   const sortDates = () => {
//     arr.sort((a,b)=>{
//       let d1 = new Date(b.date).getTime();
//       let d2 = new Date(a.date).getTime();

//       if(d1==d2)
//       {
//         return b.views-a.views;
//       }
//       return d1 - d2;
//     })
//     console.log(arr)
//   }

//   const sortViews = () => {
//     arr.sort((a,b)=>{
//       return b.views-a.views;
//     });
//     console.log(arr);

//   }

//   return (
//     <div className="">
//      <h1>Date and Views Table</h1>
//      <button onClick = {sortDates}>Sort by Date</button>
//      <button onClick = {sortViews}>Sort by Views</button>
//      <table>
//       <thead>
//         <tr>
//           <th>Date</th>
//           <th>Views</th>
//           <th>Article</th>
//         </tr>
//       </thead>
//       <tbody>

//         {data.map(m=><tr key={key++}>
//           <td>{m.date}</td>
//           <td>{m.views}</td>
//           <td>{m.article}</td>
//         </tr>)}
//       </tbody>
//      </table>
//     </div>
//   );
return (<>
<DataTable />
</>)
}

export default App;
