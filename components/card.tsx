import React from "react";

interface CardProps {
  title: string;
  shortlist: string[];
  body?: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="text-white w-64">
      <div className="text-4xl text-center">{props.title}</div>
      <ul>
        {props.shortlist.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam
        architecto minus at cumque quis quae quia voluptatum repellat, ullam
        veniam laborum earum reprehenderit illum non necessitatibus totam
        consectetur cupiditate ratione soluta obcaecati. Natus vitae eum eaque
        doloribus repellendus nisi sapiente iusto molestias enim fuga! Aut
        aliquid libero et commodi.
      </p>
    </div>
  );
};

export default Card;
