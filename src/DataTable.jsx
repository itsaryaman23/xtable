import React, { useState } from 'react';

const DataTable = () => {

  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(initialData);

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => b.views - a.views);
    setData(sortedData);
  };

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    setData(sortedData);
  };

  return (
    <div>
      {/* <div> */}
        <button onClick={sortByViews}>Sort by Views</button>
        <button onClick={sortByDate}>Sort by Date</button>
      {/* </div> */}

      <table>
        <thead>
          <tr>
            <th>Article</th>
            <th>Views</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.article}</td>
              <td>{item.views}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
