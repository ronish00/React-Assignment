import React, { useCallback, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ShowDetail = ({ userId }) => {
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/users/${userId}`)
    }

  return (
    <div>
      <Button onClick={handleShowDetail}>Show Details</Button>
    </div>
  );
};

export default ShowDetail;
