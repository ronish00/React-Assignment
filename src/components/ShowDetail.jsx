import React, { useCallback, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ShowDetail = ({ subscriberId }) => {
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/subscribers/${subscriberId}`)
    }

  return (
    <div>
      <Button onClick={handleShowDetail}>Show Details</Button>
    </div>
  );
};

export default ShowDetail;
