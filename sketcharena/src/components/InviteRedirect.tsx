import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InviteRedirect = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    const imageUri = localStorage.getItem("avatar");

    if (!imageUri) {
      navigate("/");
    } else {
      navigate(`/gamedashboard/${roomId}`);
    }
  }, [navigate, roomId]);

  return null;
};

export default InviteRedirect;
