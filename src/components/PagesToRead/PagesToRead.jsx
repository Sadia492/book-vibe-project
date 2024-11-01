import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getStoredRead } from "../../Utilities/LocalStorage";

export default function PagesToRead() {
  const [readPagesList, setReadPagesList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const listedReadIds = getStoredRead();

    const uniqueArrayRead = listedReadIds.filter(
      (item, index) => listedReadIds.indexOf(item) === index
    );

    const selectedBooks = allBooks.filter((book) =>
      uniqueArrayRead.includes(book.bookId)
    );

    setReadPagesList(selectedBooks);
  }, []);
  console.log(readPagesList);

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Define an array of colors for different bars
  const colors = [
    "#0085F6",
    "#00C29C",
    "#FBB929",
    "#FC8042",
    "#FB0100",
    "#ff8c00",
  ];

  return (
    <div className="w-11/12 mx-auto">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={readPagesList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readPagesList.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
