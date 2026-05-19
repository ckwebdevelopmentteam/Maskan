import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import SustainableRetreatClient from "@/components/Client/SustainableRetreatClient";

export default function SustainableRetreat() {
  return (
    <div className="relative bg-[#EEEEEE] py-36 text-[#1F2322] md:py-60 overflow-hidden">

      {/* Visible Architectural Crane Background (Section Specific) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-15 mix-blend-screen">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#1F2322" strokeWidth="1.5" fill="none">
            {/* Grid */}
            <path d="M 0 100 L 1200 100 M 0 200 L 1200 200 M 0 300 L 1200 300 M 0 400 L 1200 400 M 0 500 L 1200 500 M 0 600 L 1200 600 M 0 700 L 1200 700" strokeOpacity="0.2" strokeDasharray="4 4" />
            <path d="M 100 0 L 100 800 M 200 0 L 200 800 M 300 0 L 300 800 M 400 0 L 400 800 M 500 0 L 500 800 M 600 0 L 600 800 M 700 0 L 700 800 M 800 0 L 800 800 M 900 0 L 900 800 M 1000 0 L 1000 800 M 1100 0 L 1100 800" strokeOpacity="0.2" strokeDasharray="4 4" />

            {/* Giant Crane Outline */}
            <g transform="translate(100, 100) scale(1.2)">
              {/* Mast */}
              <rect x="200" y="50" width="20" height="700" />
              {/* Mast inner zig-zags */}
              <path d="M 200 50 L 220 70 M 200 70 L 220 90 M 200 90 L 220 110 M 200 110 L 220 130 M 200 130 L 220 150 M 200 150 L 220 170 M 200 170 L 220 190 M 200 190 L 220 210 M 200 210 L 220 230 M 200 230 L 220 250 M 200 250 L 220 270 M 200 270 L 220 290 M 200 290 L 220 310 M 200 310 L 220 330 M 200 330 L 220 350 M 200 350 L 220 370 M 200 370 L 220 390 M 200 390 L 220 410 M 200 410 L 220 430 M 200 430 L 220 450 M 200 450 L 220 470 M 200 470 L 220 490 M 200 490 L 220 510 M 200 510 L 220 530 M 200 530 L 220 550" />

              {/* Jib */}
              <rect x="0" y="30" width="700" height="20" />
              <path d="M 0 30 L 10 50 M 20 30 L 30 50 M 40 30 L 50 50 M 60 30 L 70 50 M 80 30 L 90 50 M 100 30 L 110 50 M 120 30 L 130 50 M 140 30 L 150 50 M 160 30 L 170 50 M 180 30 L 190 50 M 220 30 L 230 50 M 240 30 L 250 50 M 260 30 L 270 50 M 280 30 L 290 50 M 300 30 L 310 50 M 320 30 L 330 50 M 340 30 L 350 50 M 360 30 L 370 50 M 380 30 L 390 50 M 400 30 L 410 50 M 420 30 L 430 50 M 440 30 L 450 50 M 460 30 L 470 50 M 480 30 L 490 50 M 500 30 L 510 50" />

              {/* Top peak */}
              <polygon points="200,30 220,30 210,0" />

              {/* Tension Cables */}
              <line x1="210" y1="0" x2="50" y2="30" />
              <line x1="210" y1="0" x2="150" y2="30" />
              <line x1="210" y1="0" x2="350" y2="30" />
              <line x1="210" y1="0" x2="550" y2="30" />

              {/* Load line */}
              <line x1="450" y1="50" x2="450" y2="300" strokeWidth="2" />
              <rect x="430" y="300" width="40" height="20" />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-10">
        <ResponsiveMarquee
          animationConfig={{
            mobile: {
              max: "-887px",
              speed: 50,
            },
            desktop: {
              max: "-88.7%",
              speed: 5,
            },
          }}
        >
          {"Fifty/Fifty Model • Flexible Budgeting • Interest Free • "}
        </ResponsiveMarquee>

        <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
          <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
            <ResponsiveMaskTextVariant
              desktop={[
                <Fragment key="d-0">
                  Our Unique and Convenient Budgeting Model
                </Fragment>,
                <Fragment key="d-1">
                  for Clients: Start the construction of your
                </Fragment>,
                <Fragment key="d-2">
                  building with our 'Fifty/Fifty' model.
                </Fragment>,
                <Fragment key="d-3">
                  Firstly, commit an advance token-payment
                </Fragment>,
                <Fragment key="d-4">
                  of half the budget. As progress continues,
                </Fragment>,
                <Fragment key="d-5">
                  complete the first half seamlessly.
                </Fragment>,
              ]}
              mobile={[
                <Fragment key="m-0">
                  Our Unique and Convenient Budgeting
                </Fragment>,
                <Fragment key="m-1">
                  Model for Clients: Start with our
                </Fragment>,
                <Fragment key="m-2">
                  'Fifty/Fifty' model. Commit an
                </Fragment>,
                <Fragment key="m-3">
                  advance token-payment of half the
                </Fragment>,
                <Fragment key="m-4">
                  budget, and complete the first half
                </Fragment>,
                <Fragment key="m-5">as construction progress unfolds.</Fragment>,
              ]}
              className="text-base [line-height:1.33] md:text-lg"
            />

            <ResponsiveMaskTextVariant
              desktop={[
                <Fragment key="d2-0">
                  The rest of the funding can wait and
                </Fragment>,
                <Fragment key="d2-1">
                  be split into equal instalments of
                </Fragment>,
                <Fragment key="d2-2">
                  thirty-six payments in thirty-six months.
                </Fragment>,
                <Fragment key="d2-3">
                  Most importantly, without incurring any
                </Fragment>,
                <Fragment key="d2-4">additional fees or market surplus.</Fragment>,
              ]}
              mobile={[
                <Fragment key="m2-0">
                  The rest of the funding can wait
                </Fragment>,
                <Fragment key="m2-1">
                  and be split into thirty-six equal
                </Fragment>,
                <Fragment key="m2-2">
                  monthly instalments. No additional
                </Fragment>,
                <Fragment key="m2-3">
                  fees, no market surplus—just your
                </Fragment>,
                <Fragment key="m2-4">building dreams realized.</Fragment>,
              ]}
              className="text-base [line-height:1.33] md:text-lg"
            />
          </div>
          <SustainableRetreatClient />
        </div>
      </div>
    </div>
  );
}
