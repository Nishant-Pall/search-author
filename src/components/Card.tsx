import React, { FC } from "react";

interface Props {
    name: any;
    birthDate: any;
    topWork: any;
    totalBooks: any;
}

const Card: FC<Props> = ({ birthDate, topWork, totalBooks }: Props) => {
    console.log(topWork);

    return (
        <div className="container">
            <h1>Hello</h1>
            <div>
                <h1>{birthDate}</h1>
                <h1>{topWork}</h1>
                <h1>{totalBooks}</h1>
            </div>
            <p>
                <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample"
                >
                    Toggle width collapse
                </button>
            </p>
            <div style={{ minHeight: "120px" }}>
                <div
                    className="collapse collapse-horizontal"
                    id="collapseWidthExample"
                >
                    <div className="card card-body" style={{ width: "300px" }}>
                        This is some placeholder content for a horizontal
                        collapse. It's hidden by default and shown when
                        triggered.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
