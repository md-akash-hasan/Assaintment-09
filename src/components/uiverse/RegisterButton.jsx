import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaLock } from "react-icons/fa";
import styled from "styled-components";

const Button = () => {
  let path = usePathname();
  return (
    <StyledWrapper>
      <button>
        {" "}
        <Link
          href={`/register`}
          className={`${path === "/register" ? "primaryColor" : ""} flex gap-2 items-center`}
        >
          <FaLock /> Register
        </Link>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    padding: 10px 15px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #e8e8e8;
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
    overflow: hidden;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  button:hover {
    color: #e8e8e8;
  }

  button:hover::before {
    width: 100%;
  }
`;

export default Button;
