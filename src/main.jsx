import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "/book/:bookId",
        loader: async ({ params }) => {
          const response = await fetch(`./booksData.json`);
          const data = await response.json();
          return data.find(
            (book) => book.bookId === parseInt(params.bookId, 10)
          );
        },
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
