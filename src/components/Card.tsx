import React, { FC } from "react";

interface Props {
    name: any;
    authorIndex: number;
    birthDate: any | undefined;
    topWork: any | undefined;
    totalBooks: any | undefined;
}

const Card: FC<Props> = ({
    name,
    birthDate,
    authorIndex,
    topWork,
    totalBooks,
}: Props) => {
    console.log(topWork);

    return (
        <div className="container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            {name}
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <p>Author Details</p>
                        <ul>
                            <li>Data of Birth: {birthDate}</li>
                            <li>Top Work: {topWork}</li>
                            <li>Total Books: {totalBooks}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
