import React, { useCallback, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ShowDetail = ({ userId, row }) => {
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`user/${userId}`)
    }

  return (
    <div>
      <Button onClick={handleShowDetail}>Show Details</Button>
    </div>
  );
};

export default ShowDetail;
