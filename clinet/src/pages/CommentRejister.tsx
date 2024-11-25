import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CommentRejister() {
  
  const [star1, setStar1] = useState("star");
  const [star2, setStar2] = useState("star");
  const [star3, setStar3] = useState("star");
  const [star4, setStar4] = useState("star");
  const [star5, setStar5] = useState("star");
  const handelStyle = (num: number) => {
    switch (num) {
      case 1:
        setStar1(star1 == "star" ? "contenerStarChecked" : "star");
        break;
      case 2:
        setStar1("contenerStarChecked");
        setStar2(star2 == "star" ? "contenerStarChecked" : "star");
        break;
      case 3:
        setStar1("contenerStarChecked");
        setStar2("contenerStarChecked");
        setStar3(star3 == "star" ? "contenerStarChecked" : "star");
        break;
      case 4:
        setStar1("contenerStarChecked");
        setStar2("contenerStarChecked");
        setStar3("contenerStarChecked");
        setStar4(star4 == "star" ? "contenerStarChecked" : "star");
        break;
      case 5:
        setStar1("contenerStarChecked");
        setStar2("contenerStarChecked");
        setStar3("contenerStarChecked");
        setStar4("contenerStarChecked");
        setStar5(star5 == "star" ? "contenerStarChecked" : "star");
        break;
    }
  };
  return (
    <div>
      <form>
        <input type="text" required />
        <div className="contenerStar">
          <div onClick={() => handelStyle(1)} className={star1}></div>
          <div onClick={() => handelStyle(2)} className={star2}></div>
          <div onClick={() => handelStyle(3)} className={star3}></div>
          <div onClick={() => handelStyle(4)} className={star4}></div>
          <div onClick={() => handelStyle(5)} className={star5}></div>
        </div>
        <Link to={"/addc"}>
          <button type="submit">Submit💌</button>
        </Link>
      </form>
    </div>
  );
}