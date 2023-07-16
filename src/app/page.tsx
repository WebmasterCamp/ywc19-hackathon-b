"use client";
import { Journey1 } from "@/components/journey/journey-1";
import { Journey2 } from "@/components/journey/journey-2";
import { Journey3 } from "@/components/journey/journey-3";
import { Journey4 } from "@/components/journey/journey-4";
import { Journey5 } from "@/components/journey/journey-5";
import { Journey6 } from "@/components/journey/journey-6";
import { Journey7 } from "@/components/journey/journey-7";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const [isShowJourney, setIsShowJourney] = useState(true);
  const [isFadeJourney, setIsFadeJourney] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowJourney2, setIsShowJourney2] = useState(false);
  const [isFadeJourney2, setIsFadeJourney2] = useState(false);
  const [isShowJourney3, setIsShowJourney3] = useState(false);
  const [isFadeJourney3, setIsFadeJourney3] = useState(false);
  const [isShowJourney4, setIsShowJourney4] = useState(false);
  const [isFadeJourney4, setIsFadeJourney4] = useState(false);
  const [isShowJourney5, setIsShowJourney5] = useState(false);
  const [isFadeJourney5, setIsFadeJourney5] = useState(false);
  const [isShowJourney6, setIsShowJourney6] = useState(false);
  const [isFadeJourney6, setIsFadeJourney6] = useState(false);
  const [isShowJourney7, setIsShowJourney7] = useState(false);
  const [isFadeJourney7, setIsFadeJourney7] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();
  useEffect(() => {
    setIsFadeJourney(true);
    const t = setTimeout(() => {
      setIsShowJourney(false);
      setIsShowForm(true);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={"h-screen w-screen flex relative"}>
      {isShowJourney && <Journey1 fade={isFadeJourney} />}

      {isShowForm && (
        <div className="space-y-2 m-auto w-64 shadow-shadow-primary rounded-2xl p-5">
          <div className="font-bold text-xl text-center text-primary">
            ข้อมูลส่วนตัว
          </div>
          <div>
            <p>ชื่อ</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="rounded-lg w-full bg-slate-200"
            />
          </div>
          <div>
            <p>อายุ</p>
            <input type="text" className="rounded-lg w-full bg-slate-200" />
          </div>
          <div className="flex gap-4">
            <div>
              <p>น้ำหนัก</p>
              <input type="text" className="rounded-lg w-full bg-slate-200" />
            </div>
            <div>
              <p>ส่วนสูง</p>
              <input type="text" className="rounded-lg w-full bg-slate-200" />
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button
              className="rounded-lg px-4 py-1 bg-[#3E3E6B] text-white"
              onClick={() => {
                setIsShowJourney2(true);
                setIsShowForm(false);
              }}
            >
              ถัดไป
            </button>
          </div>
        </div>
      )}

      {isShowJourney2 && (
        <Journey2
          onClick={() => {
            console.log("click");
            setIsFadeJourney2(true);
            setTimeout(() => {
              setIsShowJourney2(false);
              setIsShowJourney3(true);
            }, 3000);
          }}
          fade={isFadeJourney2}
        />
      )}

      {isShowJourney3 && (
        <Journey3
          onClick={() => {
            console.log("click");
            setIsFadeJourney3(true);
            setTimeout(() => {
              setIsShowJourney3(false);
              setIsShowJourney4(true);
            }, 3000);
          }}
          fade={isFadeJourney3}
        />
      )}

      {isShowJourney4 && (
        <Journey4
          onClick={() => {
            console.log("click");
            setIsFadeJourney4(true);
            setTimeout(() => {
              setIsShowJourney4(false);
              setIsShowJourney5(true);
            }, 3000);
          }}
          fade={isFadeJourney4}
          name={name ?? ""}
        />
      )}
      {isShowJourney5 && (
        <Journey5
          onClick={() => {
            console.log("click");
            setIsFadeJourney5(true);
            setTimeout(() => {
              setIsShowJourney5(false);
              setIsShowJourney6(true);
            }, 3000);
          }}
          fade={isFadeJourney5}
        />
      )}
      {isShowJourney6 && (
        <Journey6
          onClick={() => {
            console.log("click");
            setIsFadeJourney6(true);
            setTimeout(() => {
              setIsShowJourney6(false);
              setIsShowJourney7(true);
            }, 3000);
          }}
          fade={isFadeJourney6}
        />
      )}
      {isShowJourney7 && (
        <Journey7
          onClick={() => {
            console.log("click");
            setIsFadeJourney7(true);
            setTimeout(() => {
              setIsShowJourney7(false);
              router.push("/summary");
            }, 3000);
          }}
          fade={isFadeJourney7}
        />
      )}
    </div>
  );
}
