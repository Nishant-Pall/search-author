/* eslint-disable array-callback-return */
import React, { FC, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./index.css";

interface Props {}

const App: FC = (props: Props) => {
    const [name, setName] = useState("");
    const [response, setResponse] = useState([]);

    const searchAuthor = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.get(
            "https://openlibrary.org/search/authors.json",
            {
                params: {
                    q: name,
                },
            }
        );
        setResponse(response.data.docs);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Book World</h1>
                </div>
            </div>
            <div className="row input-row">
                <div className="col">
                    <form onSubmit={searchAuthor}>
                        <div className="mb-3">
                            <input
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Enter name to find matching authors and press enter to search"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row output-row">
                <div className="col">
                    {response.map((author: any, index: number) => {
                        return (
                            <div className="output-col" key={index}>
                                <Card
                                    name={author.name}
                                    authorIndex={index}
                                    birthDate={author.birth_date}
                                    topWork={author.top_work}
                                    totalBooks={author.work_count}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
