import React, { FC } from 'react';

type ButtonProps = {
    buttonText:string
};

const Button:FC<ButtonProps> = ({buttonText}) => {

    return (
        <button className="bg-primary text-white py-2 px-8  text-xl leading-[24px] hover:bg-blue-600">
        {buttonText}
      </button>
    )
}
export default Button;