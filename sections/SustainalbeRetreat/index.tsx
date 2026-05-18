import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import SustainableRetreatClient from "@/components/Client/SustainableRetreatClient";

export default function SustainableRetreat() {
  return (
    <div className="bg-[#30493D] py-36 text-[#D1CCBF] md:py-60">
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
  );
}
