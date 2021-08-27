import React, { FC } from "react";
import Accordion from "react-bootstrap/Accordion";

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
    const authorId: string = String(authorIndex);

    return (
        <div className="accordion-container">
            <Accordion>
                <Accordion.Item eventKey={authorId}>
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body>
                        <p>Author Details</p>
                        <ol>
                            <li>Data of Birth: {birthDate}</li>
                            <li>Top Work: {topWork}</li>
                            <li>Total Books: {totalBooks}</li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Card;
