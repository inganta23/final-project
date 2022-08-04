import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardDate } from "../components/CardDate";
import { CardTravel } from "../components/CardTravel";
import moment from "moment";
import { getDay } from "../utils/date";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const TravelList = (tikets) => {
  const navigate = useNavigate();
  const [day, setDay]   = useState([]);
  const [flag, setFlag] = useState(true);
  const [dateNow, setDateNow] = useState(tikets?.tglBerangkat.substring(0, 2));

useEffect(() => {
  const arrDate = [];
  const date = moment(tikets.tglBerangkat, "DD-MM-YYYY");
  for (let i = 1; i <= 5; i++) {
    const newDate = date.add(i === 1 ? 0 : 1, "days");
    arrDate.push({
      date: newDate.format("DD"),
      day: getDay(newDate.format("dddd")),
    });
  }
  setDay(arrDate);
}, [])

  const handleClickTiket = (index) => {
     navigate(`/beli-tiket/${index}`);
  };

  if (tikets.tikets === ""){
    return <h2 className="text-center mt-[100px]">Tidak ada tiket tersedia</h2>;
  }

  const handleCLickCardDate = async (data) => {
    setFlag(false);
   await tikets.setTiketGlobal(data);
    setTimeout(() => {
      setFlag(true);
    }, 1500);
   
  }
function InlineWrapperWithMargin({ children }) {
  return (
    <span
      style={{
        display: "block",
        marginBottom: "6px",
      }}
    >
      {children}
    </span>
  );
}

return (
    <div>
      <div className="flex justify-center mt-24">
        <div className="w-3/5">
          <div className="flex justify-center">
            {day?.map((dt) => {
              return (
                <CardDate
                  key={dt.day}
                  day={dt.day}
                  date={dt.date}
                  dateNow={dateNow}
                  setDateNow={setDateNow}
                  setTiketGlobal={(data) => handleCLickCardDate(data)}
                  dataTiket={tikets?.tikets[0]}
                />
              );
            })}
          </div>
          <div className="mt-4">
            {flag &&
              tikets.tikets?.map((tiket, index) => (
                <div key={index} onClick={() => handleClickTiket(index)}>
                  <CardTravel tiket={tiket} />
                </div>
              ))}
            {!flag && (
              <SkeletonTheme height={180}  >
                  <Skeleton count={2} wrapper={InlineWrapperWithMargin} />
              </SkeletonTheme>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
