import React from "react";

interface CardProps {
  title: string;
  shortlist: string[];
  body?: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="text-white my-8 mx-auto bg-red-800 rounded bg-opacity-50">
      <div className="text-4xl text-center m-4">{props.title}</div>
      <hr/>
      <div className="w-96">
        <ul className="m-2 list-disc p-4">
          {props.shortlist.map((item) => (
            <li className="">{item}</li>
          ))}
        </ul>
        <hr/>
        <p className="m-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam
        architecto minus at cumque quis quae quia voluptatum repellat, ullam
        veniam laborum earum reprehenderit illum non necessitatibus totam
        consectetur cupiditate ratione soluta obcaecati. Natus vitae eum eaque
        doloribus repellendus nisi sapiente iusto molestias enim fuga! Aut
        aliquid libero et commodi.
      </p>
      </div>
    </div>
  );
};

export default Card;
